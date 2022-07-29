import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import restaurantRouter from './routes/restaurants.routes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Its alive!');
});

app.use(restaurantRouter)

export default app;