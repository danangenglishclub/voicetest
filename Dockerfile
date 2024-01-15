# Use nginx as the base image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the content of the current directory into the container
COPY . /usr/share/nginx/html

# Install openssl
RUN apt-get update && \
    apt-get install openssl -y

# Create a self-signed SSL certificate
RUN mkdir -p /etc/nginx/cert && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/cert/nginx.key -out /etc/nginx/cert/nginx.crt -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com"

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Create a new configuration file
RUN echo "server {\n\
    listen 443 ssl;\n\
    ssl_certificate /etc/nginx/cert/nginx.crt;\n\
    ssl_certificate_key /etc/nginx/cert/nginx.key;\n\
    root /usr/share/nginx/html;\n\
    index index.html index.htm;\n\
    server_name localhost;\n\
    location / {\n\
        try_files \$uri \$uri/ =404;\n\
    }\n\
}" > /etc/nginx/conf.d/default.conf

# Expose port 443 for SSL
EXPOSE 443

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]

