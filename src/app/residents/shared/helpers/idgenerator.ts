export class IdGenerator {

    randomNumber: number = Math.ceil(Math.random() * 60); 

    generateId(): number {
        // return `${name.slice(0, 3)}-${Math.ceil(Math.random() * this.randomNumber + 1)}`;
        return Math.ceil(Math.random() * this.randomNumber + 1)
    }
}