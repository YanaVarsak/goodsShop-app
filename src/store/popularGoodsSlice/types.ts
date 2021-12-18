import { DescriptionsProps } from "antd";
import { LOAD_STATUSES } from "./constants";

export interface PopularCategories {
  category: { id: string; type: string; label: string };
  items: { id: string; label: string; price: number; description:string; img:string}[];
}

export interface State {
  loadStatus: LOAD_STATUSES;
  data: PopularCategories[];
}
