FROM node:carbon

COPY ./Scripts/frontend-entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/frontend-entrypoint.sh"]

# Copy or mount node app here
WORKDIR /code/

EXPOSE 8080

ENTRYPOINT ["/entrypoint/frontend-entrypoint.sh"]

CMD ["npm", "start"]