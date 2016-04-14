sudo docker run --name rpmelectrical \
-e VIRTUAL_HOST=rpmelectrical.com.sg,www.rpmelectrical.com.sg \
-v $(pwd):/usr/share/nginx/html:ro -d nginx
