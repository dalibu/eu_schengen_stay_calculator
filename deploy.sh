#!/bin/bash

# Schengen Calculator Deployment Script
# This script deploys the app to schengen.dalibu.de with SSL

set -e

DOMAIN="schengen.dalibu.de"
EMAIL="your-email@example.com"  # Replace with your email

echo "🚀 Starting deployment to $DOMAIN..."

# Step 1: Build and start containers (without SSL at first)
echo "📦 Building Docker containers..."
docker-compose up -d --build

# Step 2: Wait for nginx to start
echo "⏳ Waiting for services to start..."
sleep 5

# Step 3: Get SSL certificate
echo "🔒 Obtaining SSL certificate from Let's Encrypt..."

# First, use HTTP-only mode to get certificate
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path /var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN

# Step 4: Restart nginx with SSL enabled
echo "🔄 Restarting nginx with SSL..."
docker-compose restart nginx-proxy

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your site is now available at:"
echo "  🌐 https://$DOMAIN"
echo ""
echo "To update the site:"
echo "  1. git pull"
echo "  2. docker-compose restart"
echo ""
