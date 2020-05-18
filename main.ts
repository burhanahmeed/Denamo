import { 
    App,
    logger,
    parser,
    staticServe
} from "./modules/index.ts";
import Application from './application/entry.ts';

const app = new App();
// Logging response method status path time
app.use(logger);
// Parsing the request body and save it to request.params
// Also, updated to parse the queries from search params
app.use(parser);
// Serve static files
// This path must be started from your command line path.
app.use(staticServe("./public", {maxAge: 1000}));
const env = Deno.env;

/**
 * Run Denamo here, the entry point to Denamo world
 */
Application(app);

const PORT: number = env.get('PORT') ? Number(env.get('PORT')) : 3500;
app.listen({ 
    port: PORT
});
console.log(`http://localhost:${PORT}`);