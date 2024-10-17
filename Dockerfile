# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7
#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node14.16.0-chrome90-ff88
#Create the folder where our project will be stored
RUN mkdir -p /cypress-docker
#We make it our workdirectory
WORKDIR /cypress-docker

#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx" , "cypress", "run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
ARG NODE_VERSION=18.16.0

#ROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production


WORKDIR D:/Practice/cypress/

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ["node", "HelloWorld.cy.js"]
