# Create image based on the official Node 10.5.2 image from dockerhub

# We label our stage as 'builder'
FROM node:10.5.2 as builder

LABEL author="Ebrahim Hamdy"

COPY package.json yarn.lock ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

WORKDIR /app

COPY . .

# install yarn
RUN npm i yarn

#install packages
RUN yarn install

# if you have libraries in your workspace that the angular app relies on, build them here

# build your application
RUN yarn build


# STAGE 2
# Deploy APP

# In this stage, we are going to take the build artefacts from stage one and build a deployment docker image
# We are using nginx:alpine as the base image of our deployment image
FROM nginx:alpine

## Copy our default nginx config
COPY config/nginx.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
