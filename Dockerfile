FROM node:16.14.0-alpine3.15

WORKDIR /app
COPY . .
RUN npm install
COPY src src
RUN npm run build
CMD ["npm", "start"]
