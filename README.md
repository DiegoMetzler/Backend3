Proyecto de Gestión de Adopción de Mascotas

Bienvenido a la API de Adopción de Mascotas. Este proyecto permite gestionar la adopción de mascotas mediante una API basada en Node.js, Express y Docker.


- Instalación y Configuración

1️ Clonar el Repositorio

git clone https://github.com/diego272/mi-api-adopcion.git
cd mi-api-adopcion

2️ Instalar Dependencias

npm install

3️ Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto y agrega:

PORT=3000
MONGO_URI=mongodb://localhost:27017/adoptionDB

4️ Ejecutar en Desarrollo

npm start


- Docker

1️ Construir la Imagen Docker

docker build -t diego272/mi-api-adopcion .

2️ Ejecutar el Contenedor

docker run -p 3000:3000 diego272/mi-api-adopcion


- Endpoints Principales

GET /api/products → Obtiene todos los productos

GET /api/products/:pid → Obtiene un producto por ID


POST /api/carts → Crea un nuevo carrito


GET /api/mocks/mockingusers → Genera 50 usuarios ficticios

POST /api/mocks/generateData → Inserta datos de prueba en la base de datos




La imagen de Docker está disponible en DockerHub:🔗 https://hub.docker.com/r/diego272/mi-api-adopcion



