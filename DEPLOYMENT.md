# 🚀 Deployment Guide - Schengen Calculator

Инструкция по деплою на Hetzner сервер с доменом **schengen.dalibu.de**

## 📋 Предварительные требования

- ✅ Ubuntu сервер на Hetzner
- ✅ Docker и Docker Compose установлены
- ✅ Домен dalibu.de с возможностью настройки DNS

## 🌐 Шаг 1: Настройка DNS

Добавьте A-запись в DNS настройках вашего домена:

```
Тип:     A
Имя:     schengen
Значение: <IP_ВАШЕГО_HETZNER_СЕРВЕРА>
TTL:     3600
```

Проверьте что DNS работает:
```bash
nslookup schengen.dalibu.de
# Должен показать IP вашего сервера
```

## 🐳 Вариант A: Быстрый запуск (без SSL, для теста)

На вашем Hetzner сервере:

```bash
# 1. Клонируем репозиторий
cd /opt
git clone https://github.com/dalibu/eu_schengen_stay_calculator.git
cd eu_schengen_stay_calculator

# 2. Запускаем простую версию
docker-compose -f docker-compose.simple.yml up -d

# 3. Проверяем
curl localhost:8080
```

Сайт будет доступен по адресу: `http://<IP_СЕРВЕРА>:8080`

## 🔒 Вариант B: Полный деплой с SSL (рекомендуется)

### 1. Подготовка

```bash
# На Hetzner сервере
cd /opt
git clone https://github.com/dalibu/eu_schengen_stay_calculator.git
cd eu_schengen_stay_calculator
```

### 2. Настройка email для SSL

Откройте `deploy.sh` и замените:
```bash
EMAIL="your-email@example.com"  # ← Ваш реальный email
```

### 3. Первичный запуск (без SSL)

```bash
# Запускаем только app и nginx без SSL
docker-compose up -d schengen-calculator

# Проверяем что работает
docker ps
docker logs schengen-calculator
```

### 4. Получение SSL сертификата

```bash
# Создаём директории для certbot
mkdir -p certbot/conf certbot/www

# Временно запускаем nginx БЕЗ SSL для получения сертификата
# Сначала используем упрощённую конфигурацию nginx
cat > nginx/nginx-temp.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name schengen.dalibu.de;
        
        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }
        
        location / {
            proxy_pass http://schengen-calculator:80;
        }
    }
}
EOF

# Запускаем временный nginx
docker run -d --name nginx-temp \
  --network eu_schengen_stay_calculator_web \
  -p 80:80 \
  -v $(pwd)/nginx/nginx-temp.conf:/etc/nginx/nginx.conf:ro \
  -v $(pwd)/certbot/www:/var/www/certbot \
  nginx:alpine

# Получаем сертификат
docker run --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email ВАШ_EMAIL@example.com \
    --agree-tos \
    --no-eff-email \
    -d schengen.dalibu.de

# Останавливаем временный nginx
docker stop nginx-temp && docker rm nginx-temp
```

### 5. Запуск с SSL

```bash
# Теперь запускаем полную конфигурацию с SSL
docker-compose up -d

# Проверяем логи
docker-compose logs -f
```

### 6. Проверка

Откройте в браузере: **https://schengen.dalibu.de**

Должна быть зелёная иконка замочка (SSL работает)!

## 🔄 Обновление сайта

```bash
cd /opt/eu_schengen_stay_calculator

# Получить последние изменения
git pull

# Перезапустить контейнеры
docker-compose restart

# Или пересобрать (если были изменения в Dockerfile)
docker-compose up -d --build
```

## 🛠️ Полезные команды

```bash
# Посмотреть логи
docker-compose logs -f

# Посмотреть статус контейнеров
docker-compose ps

# Остановить всё
docker-compose down

# Перезапустить один сервис
docker-compose restart schengen-calculator

# Проверить SSL сертификат
openssl s_client -connect schengen.dalibu.de:443 -servername schengen.dalibu.de
```

## 🔐 Автообновление SSL сертификата

SSL сертификаты от Let's Encrypt действуют 90 дней. Certbot контейнер автоматически обновляет их каждые 12 часов.

Проверить обновление вручную:
```bash
docker-compose exec certbot certbot renew --dry-run
```

## 📊 Мониторинг

Проверить что сайт работает:
```bash
curl -I https://schengen.dalibu.de
```

## ⚠️ Troubleshooting

### Проблема: "Connection refused"
```bash
# Проверьте что контейнеры запущены
docker-compose ps

# Проверьте порты
netstat -tulpn | grep -E '(80|443)'

# Проверьте firewall
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Проблема: "SSL certificate not found"
```bash
# Проверьте что сертификат создан
ls -la certbot/conf/live/schengen.dalibu.de/

# Если нет - повторите шаг получения сертификата
```

### Проблема: DNS не работает
```bash
# Проверьте DNS
dig schengen.dalibu.de

# Подождите 5-10 минут после изменения DNS
```

## 🎯 Итоговая структура

```
/opt/eu_schengen_stay_calculator/
├── schengen_stay_calculator.html
├── styles.css
├── favicon.png
├── i18n/
│   └── translations.js
├── Dockerfile
├── docker-compose.yml
├── docker-compose.simple.yml
├── nginx/
│   └── nginx.conf
├── certbot/
│   ├── conf/
│   └── www/
└── deploy.sh
```

## 🆘 Помощь

Если что-то не работает:
1. Проверьте логи: `docker-compose logs`
2. Проверьте DNS: `nslookup schengen.dalibu.de`
3. Проверьте фаервол: `sudo ufw status`
4. Проверьте порты: `netstat -tulpn | grep 80`
