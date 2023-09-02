export interface VisitorsListInterface {
  id?: number,
  firstName: string,
  image?: string,
  lastName: string,
  phoneNumber: number,
  dateAdded: string | number,
  info?: VisitorDetail
}

export interface VisitorDetail {
  phoneNumber?: number,
  amountOfVisits: number,
  status: 'allowed' | 'blacklisted' | null
}
