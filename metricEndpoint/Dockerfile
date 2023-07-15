FROM node:18-alpine
WORKDIR /app
COPY ./metricEndpoint .
RUN npm install --production
RUN npx tsc
CMD ["node", "dist/server.js"]
EXPOSE 3000