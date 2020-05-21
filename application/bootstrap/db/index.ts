import { Connection as mongoConnection } from './mongodb.db.ts';

function database (dbname: string, number?: number): void {
    if (!number) number = 0;
    switch (dbname) {
        case 'mongodb':
            mongoConnection.getConnection(number);      
            break;
    
        default:
            break;
    }
}

export { database }