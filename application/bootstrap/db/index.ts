import { Connection as mongoConnection } from './mongodb.db.ts';

function database (dbname: string, number?: number) {
    if (!number) number = 0;
    if (dbname == 'mongodb') {
        return mongoConnection.getConnection(number);
    }
}

export { database }