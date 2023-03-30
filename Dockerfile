FROM node:16
MAINTAINER "mohaijiang<mohaijiang110@163.com>"

ADD . /doc

WORKDIR /doc
RUN yarn install
RUN yarn build
EXPOSE 80

CMD ["npm","run","serve", "--", "--build","--port", "80", "--host", "0.0.0.0"]
