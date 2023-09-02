interface ResidentProfileInterface {
    name: string | null,
    estate: string | 'XXXXX' | null,
    totalVisits: number | null,
    visitors: number | null,
    phoneNumber: number | null,
    email: string | null,
    houseAddress: string | null
} 

export class ResidentProfile {
    constructor(private residentsProfile: ResidentProfileInterface) { }

    promptUser() {
        this.residentsProfile.name = prompt("Enter Resident's name: ")
        this.residentsProfile.estate = prompt("Enter Resident's estate: ")
        this.residentsProfile.email = prompt("Enter Resident's email")
        this.residentsProfile.phoneNumber = Number(prompt("Enter Resident's.phoneNumber"))
        // this.residentsProfile.totalVisits = Number(prompt("Enter Resident's total visits"))
        this.residentsProfile.houseAddress = prompt("Enter Resident's house address")
    }
}