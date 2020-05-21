import { database } from '../bootstrap/index.ts';

const db = database("mongodb");
const User = db.collection("users");

async function getUsers (params?: object): Promise<object> {
    return await User.find(params);
}

const users = {
    getUsers
}
export {
    users
}