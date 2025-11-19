# node alpine as base
FROM node:lts-alpine AS base

# install dependancies seperate to avoid rebuild
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production

# build static site
FROM base AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# disable Vercel telemetry
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn run build

# run static site
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node","server.js"]