# Sử dụng node:18 làm base image
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file vào container
COPY app.js .

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "app.js"]