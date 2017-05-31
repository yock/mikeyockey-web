from node:boron-alpine
workdir /app
volume /app
copy . /app
run npm install
cmd npm run build

from nginx:mainline-alpine
volume /app
workdir /usr/share/nginx
run ln -sf /app ./html
