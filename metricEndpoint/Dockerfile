FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
RUN tsc
CMD ["node", "src/server.js"]
EXPOSE 3000