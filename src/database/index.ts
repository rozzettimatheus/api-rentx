import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

// esta chamando as rotas antes da conexao do banco
getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database'; // exact as database service - docker-compose.yml
  createConnection({
    ...options,
  });
});
