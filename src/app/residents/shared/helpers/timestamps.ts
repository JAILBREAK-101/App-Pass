export class TimeStamp {

    constructor() {}
    
    static getTime() {
        console.log(Date.now())
        return {
            timeCreated: `${new Date().getHours()} + ':' + ${new Date().getMinutes()}`,
            dateCreated: Date.now()
        }
    }
}

const newTime = TimeStamp.getTime()