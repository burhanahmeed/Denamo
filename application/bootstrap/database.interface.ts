export interface DbSettings {
    [key: string]: dbObject[]
}

interface dbObject {
    url?: string,
    database: string,
    host?: string
}

export interface Connection {
    [key: string]: any
}