# Usar una imagen base
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto
COPY . .

# Exponer el puerto en el que corre
EXPOSE 3000

# Comando para iniciar la aplicacion
CMD ["node", "src/server.js"]
