import { LOAD_STATUSES } from './constants'
export interface Good {
    id: string,
    label: string,
    img: string,
    price: number,
    description: string
    categoryTypeId: string,
}
export interface State {
    loadStatus: LOAD_STATUSES,
    data: {
        items: Good[]; total: number
    }
}