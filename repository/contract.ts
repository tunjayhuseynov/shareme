import { makeDb } from '../db'
import mangodb from 'mongodb';

export class ContractRepository {
    db : Promise<mangodb.Db>;
    collection : string;

    constructor(collectionName: string) {
        this.db = makeDb()
        this.collection = collectionName;
    }

    findAll = async () => {
        return (await this.db).collection(this.collection).find({}).toArray()
    }

    findOne = async (filter : object) => {
        return (await this.db).collection(this.collection).findOne(filter)
    }

    find = async (filter : object) => {
        return (await this.db).collection(this.collection).find(filter).toArray()
    }

}
