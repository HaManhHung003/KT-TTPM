# Sử dụng python:3.9 làm base image
FROM python:3.9

WORKDIR /app

# Sao chép và cài đặt thư viện trước để tối ưu layer
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

EXPOSE 5000

CMD ["python", "app.py"]
# Thay vì dùng python app.py, ta dùng gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]