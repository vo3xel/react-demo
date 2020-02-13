# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# set version to yarn 2 (berry)
RUN yarn set version berry

# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn install

# start app
CMD ["yarn", "start"]