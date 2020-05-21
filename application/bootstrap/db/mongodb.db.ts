import { Database } from "../database.ts";
import { MongoClient, init } from "../../../modules/deps.ts";

await init();

const mongoConnect = (config: {[key: string]: string}) => {
    const client = new MongoClient();
    client.connectWithUri(config.url);
    client.database('Testing');
}

let Connection = new Database(mongoConnect, 'mongodb');

export {
    Connection, 
    mongoConnect
}
