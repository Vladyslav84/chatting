FROM node  Вказуємо, що скопіювати node з hub.docker
WORKDIR /appChatting Вказуємо папку куди скласти проєкт
COPY . /appChatting . значить, що все копіюємо. Куди копіюємо /appChatting
RUN npm install встановлюємо node_modules
EXPOSE 3000 внутрішній порт 
docker build . Символ б вказує, де шукати Dockerfile
"start": "react-scripts --openssl-legacy-provider start" Треба прописати, бо викидає помилку. 
з файла package.json видалив "eslintConfig": {
    "extends": "react-app"
}. Була помилка.

docker run -d -p 4000:3000 90334edab71e. 4000 зовнішній порт, на якому можна запустити. 3000 внітрішній порт. 90334edab71e номер образу. -d  не провалюємось у сам образ.