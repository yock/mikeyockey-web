from node:alpine
workdir /app
copy . /app
run npm install
cmd npm run build

from nginx:mainline-alpine
workdir /usr/share/nginx
copy --from=0 /app /usr/share/nginx/html
