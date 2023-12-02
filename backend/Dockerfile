FROM node:20 AS base

WORKDIR /app

COPY [ "package.json", "yarn.lock*", "./" ]

FROM base AS production

ENV NODE_ENV=production

RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn global add @nestjs/cli
RUN yarn build

CMD [ "yarn", "start:migrate:prod" ]