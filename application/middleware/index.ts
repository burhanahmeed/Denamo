import { 
    Request,
    Response
 } from "../../modules/index.ts";

/**
 * This is the example of Attain Middleware
 */

 function exampleMiddleware (req: Request, res: Response):any {
    console.log(req.query.tada);
    console.log(req.params);
    if (req.query.tada) {
        return res.status(200).send({
            status: 500,
            response: 'URL is restricted to use Query params'
        })
    }
 }

 export { exampleMiddleware }