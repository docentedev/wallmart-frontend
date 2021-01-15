# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@4.0.1 -g --silent
COPY . ./

# RUN chown -R front .
RUN npm run build

# production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'


#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
# nginx config copy
#COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
#RUN chown -R nginx:nginx /var/cache/nginx /etc/nginx/
#USER nginx
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]