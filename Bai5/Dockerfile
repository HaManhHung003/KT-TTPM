# Sử dụng golang:1.21-alpine làm base image cho nhẹ
FROM golang:1.21-alpine

WORKDIR /app

# Sao chép mã nguồn vào
COPY main.go .

# Build ứng dụng Go thành file thực thi tên là 'main'
RUN go build -o main main.go

# Mở cổng 8081
EXPOSE 8081

# Chạy file thực thi đã build
CMD ["./main"]