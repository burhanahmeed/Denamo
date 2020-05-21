import { Database } from "../database.ts";
import { MongoClient } from "../../../modules/deps.ts";

const mongoConnect = (config: {[key: string]: string}) => {
    const client = new MongoClient();
    client.connectWithUri(config.url);
    let db = client.database(config.database);
    return db;
}

let Connection = new Database(mongoConnect, 'mongodb');

export {
    Connection, 
    mongoConnect
}
