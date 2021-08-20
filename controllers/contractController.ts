import {ContractRepository} from '../repository/contract'
import { contract } from '../models/model'
import express from 'express'

export const getContracts = async (req: express.Request, res: express.Response) => {
    console.log(await new ContractRepository().findAll())

    res.send('Hello World!')
}

export const getContract = async (req: express.Request, res: express.Response) => {
    console.log(await new ContractRepository().findOne({ name: "Azmaz" }))

    res.send('Hello World!')
}
