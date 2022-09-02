FROM node:16 as builder
MAINTAINER "mohaijiang<mohaijiang110@163.com>"

ADD . /doc

WORKDIR /doc
RUN yarn install
RUN yarn build

FROM nginx:1.21
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /doc/build /usr/share/nginx/docs

EXPOSE 80
