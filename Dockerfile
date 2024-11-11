# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de tu proyecto (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código del proyecto al contenedor
COPY . .

# Construye la aplicación de React para producción
RUN npm run build

# Expone el puerto 3000 para que pueda ser accesible
EXPOSE 3000

# Comando para iniciar el servidor de desarrollo de React
CMD ["npm", "start"]
