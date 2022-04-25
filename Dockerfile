FROM node:alpine

# definir o diretorio do app
WORKDIR /usr/app

# copiar package.json / sem node-modules
COPY package.json ./

# nem todas vem com o yarn instalado
RUN npm install

# copiar tudo para a pasta criada
COPY . .

EXPOSE 3333

# separa em um array os comando
CMD ["npm", "run", "dev"]

# docker build -t <rentx> .
# docker run -p 3333:3333 rentx
# docker exec -it <id> /bin/bash | sh
