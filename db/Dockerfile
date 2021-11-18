FROM postgres:alpine
ADD *.sql /docker-entrypoint-initdb.d/
#ADD scripts/2_copy.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 5432