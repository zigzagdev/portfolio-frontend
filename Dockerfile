FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install
RUN npm run prepare

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]