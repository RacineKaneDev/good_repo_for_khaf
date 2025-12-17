# Base image Fluentd compatible avec ES 7 & 8
FROM fluent/fluentd:v1.17-debian-1

USER root

# Installer la bonne version du plugin Elasticsearch
RUN gem install fluent-plugin-elasticsearch -v 5.3.0 \
    && gem sources --clear-all

# Copier la configuration
COPY fluent.conf /fluentd/etc/

USER fluent

EXPOSE 24224 24224/udp

CMD ["fluentd", "-c", "/fluentd/etc/fluent.conf", "-v"]
