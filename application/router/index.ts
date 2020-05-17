import { 
    Router, 
    Request, 
    Response 
} from '../../modules/index.ts';
import { 
    exampleMiddleware
 } from "../middleware/index.ts";

const route = new Router();

route.get('/', (req: Request, res: Response) => {
    res.send({
        status: 200,
        text: 'Hello Welcome to Denamo - A Deno web boilerplate'
    })
});

route.get('/query', exampleMiddleware, (req: Request, res: Response) => {
    res.send({
        status: 200,
        text: 'Middleware query params passed'
    })
});

export default route;