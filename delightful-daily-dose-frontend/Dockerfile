# pull official base image
FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY delightful-daily-dose-frontend/package.json ./
COPY delightful-daily-dose-frontend/package-lock.json ./
RUN npm install --save --legacy-peer-deps
RUN npm install react-scripts -g

# add app
COPY delightful-daily-dose-frontend/. .

EXPOSE 3000

# start app
CMD ["npm", "start"]