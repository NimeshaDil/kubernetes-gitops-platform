FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy only necessary static files
COPY index.html ./
COPY app.js ./
EXPOSE 80
