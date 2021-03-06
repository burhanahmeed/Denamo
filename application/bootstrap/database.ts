import { database } from "./db/index.ts";
import { DbSettings, Connection } from './database.interface.ts';

const databaseList: DbSettings = {
    mongodb: [
        {
            url: Deno.env.get('MONGO_PRIMARY_URL') || 'mongodb://127.0.0.1/',
            database: Deno.env.get('MONGO_PRIMARY_DATABASE') || 'Testing'
        }
    ]
}

class Database {
    connection: Array<any>;
    connection_driver: any;
    dbname: string;
    constructor (databaseConnection: any, dbname: string) {
        this.connection = [];
        this.connection_driver = databaseConnection;
        this.dbname = dbname;
    }

    getConnection (number?: number) {
        if (!number) {
            number = 0;
        }
        if (this.connection[number]) {
            return this.connection[number];
        } else {
            if (databaseList[this.dbname].hasOwnProperty(number)) {
				this.connection[number] = this.connection_driver(databaseList[this.dbname][number]);
				return this.connection[number]
			} else {
				console.warn(`app:database Database ${this.dbname} number ${number} is not exist on configuration !`)
				return null
			
            }
        }
    }
}

const connectAll = () => {
    let conn: Connection = {};
    for (const dbname in databaseList) {
        conn[dbname] = []
		for (var i = 0; i < databaseList[dbname].length; i++) {
            conn[dbname].push(database(dbname, i));
		}
    }
    return conn;
}



export {
    connectAll,
    Database
}