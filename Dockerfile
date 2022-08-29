FROM node:lts-alpine as stage
LABEL build=builder_stage
WORKDIR /data/app

COPY package.json yarn.lock .yarnrc.yml /data/app/

RUN yarn install \
  --prefer-offline \
#   --frozen-lockfile \
  --non-interactive \
  --production=false

COPY . /data/app/

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts-alpine

WORKDIR /data/app

COPY --from=stage /data/app .

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]