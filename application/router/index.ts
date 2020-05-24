import { 
    Router, 
    Request, 
    Response 
} from '../../modules/deps.ts';
import { 
    exampleMiddleware
} from "../middleware/index.ts";
import { 
    users
} from "../models/user.model.ts";

const route = new Router();

route.get('/', exampleMiddleware, (req: Request, res: Response) => {
    res.send({
        status: 200,
        text: 'Hello Welcome to Denamo - A Deno web boilerplate'
    })
});

route.get('/users', async (req: Request, res: Response) => {
    let getUsers = await users.getUsers();
    return res.send({
        status: 200,
        data: getUsers
    });
});

route.get('/query', (req: Request, res: Response) => {
    res.send({
        status: 200,
        text: 'Middleware query params passed'
    })
});

export default route;