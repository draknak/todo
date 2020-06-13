FROM node:carbon

COPY ./Scripts/backend-entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/backend-entrypoint.sh"]

# Copy or mount node app here
WORKDIR /code/

EXPOSE 8081

ENTRYPOINT ["/entrypoint/backend-entrypoint.sh"]

CMD ["npm", "start"]