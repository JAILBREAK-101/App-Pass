export class TimeStamp {
    
    getTime() {
        return {
            timeCreated: `${new Date().getHours()} + ':' + ${new Date().getMinutes()}`,
            dateCreated: Date.now()
        }
    }
}