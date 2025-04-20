FROM nginx:1.26.3
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/dist \
	&&  mkdir -p /var/www/web_main \
	&&  mkdir -p /var/log/nginx \
	&&  mkdir -p /etc/nginx/cert

ADD dist/ /var/www/dist/
ADD web_main/ /var/www/web_main/
ARG confName

