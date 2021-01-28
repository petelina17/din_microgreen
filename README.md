# din microgreen app

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

PREPARE STEPS (first time only)

1. (only if deploy to remote docker serwer) Copy SSH key “id_rsa” to local ssh folder
   cp id_rsa ~/.ssh/
2. Create docker file "Dockerfile" in project folder:
   FROM nginx:alpine
   COPY ./public/* /usr/share/nginx/html/
3. Create account in Docker Hub
- www.dockerhub.com
- verify e-mail
  INSTALLATION STEPS
1. git clone … din-microgreen
2. go to project folder: cd din-microgreen

3. Install all javascript packages for project, defined in package.json:
   npm install
   4 . Build project, create “packet” to deploy:
   npm run build
5. Create docker image (change “”)
   docker build -t <YOUR_DOCKER_ACCOUNT>/microgreen .
6. Login to your docker hub account  (user:**** / password: ***):
   docker login
7. Upload docker image to Docker Hub registry:
   docker push <YOUR_DOCKER_ACCOUNT>/microgreen
8. (only if deploy to remote docker serwer) Go to server via SSH and update created app "image", and restart app.
   In Terminal window Login to remote server:
   ssh -i ~/.ssh/id_rsa -p <port> <username>@<remote_server_ip_address>
9. Run docker container (works both for local installation and remote server)
* Load image from Docker Hub, run in termimal:
  docker pull <YOUR_DOCKER_ACCOUNT>/microgreen
* Remove previosly installed container with web app (first time don't do it):
  docker rm -f microgreen
* Create and run web-site app in docker container:
  docker run --name=microgreen --network=home -p 8073:80 -d <YOUR_DOCKER_ACCOUNT>/microgreen


version krav:
- git ???
- node ???
- docker 20.01+
- browswers: IE 11+, MS EDGE ?, Firefox ?, Chrome ?


Prepare
install git
install node and nmp
1. Install Docker
• https://docs.docker.com/engine/install/
       

