FROM node:20.3.0-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD PORT=3000 WEBSITE_PATH=/app/packages/website/dist node /app/packages/server/dist/index.js