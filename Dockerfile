FROM circleci/node:latest-browsers

WORKDIR /usr/src/app
USER root
COPY package.json ./
RUN yarn

COPY ./ ./

#RUN npm run test:all

#CMD ["npm", "run", "build"]

EXPOSE 7001

# RUN npm run tsc
RUN npm run start:docker

