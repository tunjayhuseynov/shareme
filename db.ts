const mangodb = require('mongodb')

export async function makeDb() {
    const uri = "mongodb://localhost:27017";

    const client = new mangodb.MongoClient(uri);

    await client.connect();

    const db = client.db("shareme")

    return db;
}

