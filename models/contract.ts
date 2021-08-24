import { State } from "./collections"

//****************************************************************

export type Contract = {
    name: string,
    state: State,
    budget: number,
    customerId: string,
    incomingFollowers: number,
    acceptedInfluncers: Array<AcceptedInfluncers>,
}

export const contract = (name: string, state: State, budget: number, customerId: string ,incomingFollowers: number): Contract => {
    return {
        name: name,
        state: state,
        budget: budget,
        customerId: customerId,
        incomingFollowers: incomingFollowers,
        acceptedInfluncers: []
    }
}

//****************************************************************

export type AcceptedInfluncers = {
    influncerId: string,
    acceptedDate: string,
    commingFromInfluncer: Array<object>
}

export const acceptedInfluncers = (influncerId : string) : AcceptedInfluncers => {
    return {
        influncerId: influncerId,
        acceptedDate: new Date().toISOString(),
        commingFromInfluncer: []
    }
}

//****************************************************************

export type CommingFromInfluncer = {
    ipAdress: string,
    usedDate: string
}

export const commingFromInfluncer = (ipAdress : string) : CommingFromInfluncer => {
    return {
        ipAdress: ipAdress,
        usedDate: new Date().toISOString()
    }
}