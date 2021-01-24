
# Prepare

1. Install Docker 

* https://docs.docker.com/engine/install/ubuntu/

2. Copy SSH key to local folder 

cp nata_id_rsa ~/.ssh/

3. Create docker file

"Dockerfile" in project folder:

    FROM nginx:alpine
    COPY ./public/* /usr/share/nginx/html/

4. Create account in Docker Hub

* www.dockerhub.com
* verify e-mail


# Deploy

In project folder:

1. npm run build

2. docker build -t petelina17/microgreen .

3. docker login (user:petelina17 / password: ...)

4. docker push petelina17/microgreen

5. Go to server via SSH and update created app "image", and restart app.  
  In In Terminal window run commands:

  * ssh -i ~/.ssh/nata_id_rsa -p 1122 nata@chi.smartdrive24.com

  * docker pull petelina17/microgreen

  * (first time don't do it):
    docker rm -f microgreen
    
  * docker run --name=microgreen --network=home -p 8073:80 -d petelina17/microgreen
