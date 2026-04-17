import os
# Đọc biến môi trường APP_ENV từ hệ thống
app_env = os.getenv('APP_ENV', 'Chưa đặt biến')
print(f"Giá trị biến môi trường APP_ENV là: {app_env}")