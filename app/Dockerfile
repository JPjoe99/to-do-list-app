FROM jpjoe99/pnpm:18.16.0-alpine as build
COPY ./ ./
RUN pnpm install && pnpm run build

FROM nginx:stable-alpine
COPY --from=build ./dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

