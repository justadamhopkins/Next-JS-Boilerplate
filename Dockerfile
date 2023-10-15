FROM node:18-alpine
WORKDIR /app
COPY yarn.lock* .
RUN yarn --frozen-lockfile;
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
