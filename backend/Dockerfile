FROM oven/bun:latest

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY prisma prisma
COPY src src
COPY tsconfig.json .

ENV NODE_ENV production
CMD ["bun", "start"]

EXPOSE 3000