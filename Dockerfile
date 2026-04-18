# ── Stage 1: Build Tailwind CSS ──────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY tailwind.config.js .
COPY src/ ./src/
COPY index.html .

RUN npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# ── Stage 2: Serve with nginx:alpine ─────────────────────────
FROM nginx:1.27-alpine

# Remove default nginx config and HTML
RUN rm -f /etc/nginx/conf.d/default.conf \
    && rm -rf /usr/share/nginx/html/*

# Copy site files
COPY --from=build /app/dist/output.css /usr/share/nginx/html/dist/output.css
COPY index.html /usr/share/nginx/html/index.html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Non-root user for security
RUN addgroup -S ahl && adduser -S ahl -G ahl \
    && chown -R ahl:ahl /usr/share/nginx/html \
    && chown -R ahl:ahl /var/cache/nginx \
    && chown -R ahl:ahl /var/log/nginx \
    && touch /var/run/nginx.pid \
    && chown ahl:ahl /var/run/nginx.pid

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
