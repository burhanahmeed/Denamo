import { 
    Request,
    Response
 } from "../../modules/deps.ts";

/**
 * This is the example of Attain Middleware
 */

 function exampleMiddleware (req: Request, res: Response):any {
    // console.log(!req.query);
    // console.log('query params', req.query);
    // console.log(req.params);
    if (!req.query) {
        return res.status(200).send({
            status: 500,
            response: 'Cant pass without query params'
        })
    }
 }

 export { exampleMiddleware }
