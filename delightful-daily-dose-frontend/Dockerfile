# pull official base image
FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY delightful-daily-dose-frontend/package.json ./
COPY delightful-daily-dose-frontend/package-lock.json ./
RUN npm install
RUN npm install react-scripts -g

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]