# Sử dụng nginx:latest làm base image theo yêu cầu
FROM nginx:latest

# Sao chép file index.html vào thư mục mặc định của Nginx trong container
COPY index.html /usr/share/nginx/html/index.html

# Nginx mặc định chạy ở cổng 80
EXPOSE 80