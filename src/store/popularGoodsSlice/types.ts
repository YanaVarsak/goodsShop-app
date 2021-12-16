import { LOAD_STATUSES } from "./constants";

export interface PopularCategories { 

        id: string,
        type: string,
        label: string
    }
  


export interface State {
    loadStatus: LOAD_STATUSES,
    data: PopularCategories[]
}