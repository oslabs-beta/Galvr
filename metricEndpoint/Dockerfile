FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npx tsc
CMD ["node", "dist/server.js"]
EXPOSE 3000\