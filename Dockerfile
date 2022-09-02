FROM node:10 as builder
MAINTAINER "mohaijiang<mohaijiang110@163.com>"
RUN yarn install

ADD . /doc

WORKDIR /doc
RUN yarn build


FROM nginx:1.21
COPY --from=builder /doc/build /usr/share/nginx/html
EXPOSE 80