import { Categories } from "store/сategoriesSlice/types";

interface Goods {
  id: string;
  label: string;
  categoryTypeId: string;
  img: string;
  price: number;
  description: string;
}
interface PopularCategory {
  category: { id: string; type: string; label: string };
  items: { id: string; label: string; price: number; description:string; img:string}[];

}



export class Api {
  getDataGoods({id}:{id?:string}={}): Promise< Goods[] > {
    return fetch(`/api/goods?caterytypeIds=${id}`).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataCategory(): Promise<Categories[]> {
    return fetch("/api/categories").then((resp) => {
      if (resp.ok) {
        const res = resp.json();
         console.log({ res });
         return res;
      }
    });
  }

  getDataPopularCategory(id?: string): Promise<PopularCategory[] > {
    return fetch(`/api/popular_categories?ids=${id}`).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataCart() {
    return fetch('/api/cart').then(r => {
        if (r.ok) {
            return r.json()
        }
    })
}
}
