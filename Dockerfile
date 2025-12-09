FROM nginx:alpine

# Copy static files to nginx html directory
COPY schengen_stay_calculator.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/
COPY favicon.png /usr/share/nginx/html/
COPY i18n /usr/share/nginx/html/i18n

# Nginx will run on port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
