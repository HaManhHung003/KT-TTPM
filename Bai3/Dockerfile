# Sử dụng node:18-alpine làm base image (siêu nhẹ)
FROM node:18-alpine

WORKDIR /app

# Cài đặt dependencies
COPY package.json .
RUN npm install

# Sao chép toàn bộ code (src, public...)
COPY . .

EXPOSE 3000

CMD ["npm", "start"]