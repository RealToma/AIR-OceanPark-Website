# stage1 as builder
FROM node:alpine as builder

# copy the package.json to install dependencies
# RUN npm install

WORKDIR /react-stuff
# RUN mkdir /react-stuff
COPY package*.json ./

# CMD ["ls", "-l"]
# CMD ["pwd"]

# RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

RUN npm install
# CMD ["ls", "-l"]
COPY . .

RUN npm run build
# CMD ["ls", "-l"]



FROM nginx:alpine

# #!/bin/sh

# COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
COPY ./build /usr/share/nginx/html

EXPOSE 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
CMD ["nginx", "-g", "daemon off;"]