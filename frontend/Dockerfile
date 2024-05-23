FROM node:18-alpine as build
WORKDIR /app

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install -g node-gyp

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]