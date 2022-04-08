Crear carpeta nodeexpress
ir a la carpeta cd nodeexpress
npm init -y ---> crea package.json
npm install express ---> instala el paquete express
npm install --save-dev nodemon ---> instala nodemon , para en 
            desarrollo para i reinicia servidor al anbiar el código

crear archivo index.js ---> inicio proyecto

crear script dev en el package.json ---> para levantar el sevidor en desarrollo

lanzar servidor con npm run dev , en el puerto asignado

cambiar al modo module en package.json ---> asi podemos usar import en lugar de require

request req es lo que yo envio
response res es lo que devuelve la llamada a express
res.send ---> cadenas de texto 
res.json ---> devuelve un json
res.render ---> devuelve una vista

template engine - La vista de un modelo MVC
PUG HANDLEBARS EJS

PUG - es un template engine se instala via ---> npm install pug

ORM para acceder a bd mysql 
npm install mysql2 sequelize


deployment del proyecto de
npm install --save-dev dotenv   ---> para generar variable de entorno 
