import express from 'express';
import 'reflect-metadata';

import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log('server is running'));
