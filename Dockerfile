FROM node:17 as production
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 3000


FROM node:17 as development
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3000


