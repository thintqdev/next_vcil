# Chọn image node.js làm base image
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Thêm biến môi trường để hỗ trợ thuật toán mã hóa cũ
ENV NODE_OPTIONS=--openssl-legacy-provider

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install --production

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng Next.js
RUN npm run build

# Expose cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
