FROM redis:latest
# Copy file cấu hình vào container
COPY redis.conf /usr/local/etc/redis/redis.conf
# Chạy Redis server sử dụng file cấu hình đó
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]