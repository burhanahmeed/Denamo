import api from './router/index.ts';
import {
    Response,
    Request
} from '../modules/index.ts';

const app = (app: any) => {
    app.use('/api', api);
    app.use('/', (req: Request, res: Response) => {
        res.status(200).send(`
        <!doctype html>
        <html lang="en">
            <head>
                <title>Denamo - A Deno Web Boilerplate</title>
            </head>
            <body>
                <h1>Hello Welcome to Denamo - A Deno web boilerplate</h1>
            </body>
        </html>
        `);
    });
}

export default app;