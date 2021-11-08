FROM node 
WORKDIR /chatdocker
COPY . /chatdocker
RUN npm install
RUN npx create-react-app chatdocker
EXPOSE 3000
CMD [ "npm","start" ]

