enum State {
    Pending = "Pending",
    Canceled = "Canceled",
    Active = "Active",
    Over = "Over",
} 

export type Contract = {
    name: string,
    state: State,
    budget: number,
    incomingFollowers: number,
    acceptedInfluncers: Array<object>,
}

export type AcceptedInfluncers = {
    influncerId: string,
    acceptedDate: string,
    commingFromInfluncer: Array<object>
}

export const contract = (name : string, state : State, budget : number, incomingFollowers: number) : Contract => {
    return {
        name: name,
        state: state,
        budget: budget,
        incomingFollowers: incomingFollowers,
        acceptedInfluncers: []
    }
}

export const acceptedInfluncers = (influncerId : string) : AcceptedInfluncers => {
    return {
        influncerId: influncerId,
        acceptedDate: new Date().toISOString().replace("T"," "),
        commingFromInfluncer: []
    }
}


