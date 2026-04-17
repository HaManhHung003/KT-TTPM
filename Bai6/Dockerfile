# Stage 1: Build (Dùng image đầy đủ để cài đặt)
FROM node:18 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production (Dùng alpine siêu nhẹ để chạy)
FROM node:18-alpine
WORKDIR /app
# Chỉ copy code đã build từ Stage 1 sang Stage 2
COPY --from=build-stage /app .
CMD ["node", "app.js"]