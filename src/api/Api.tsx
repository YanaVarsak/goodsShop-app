import { Categories } from "store/сategoriesSlice/types";

interface Goods {
  id: string;
  label: string;
  categoryTypeId: string;
  img: string;
  price: number;
  description: string;
}
interface Category {
  id: string,
  label: string,
  type: string,

}



export class Api {
  getDataGoods(): Promise< Goods[] > {
    return fetch("/api/goods").then((resp) => {
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

  getDataPopularCategory(id?: string): Promise<Category[] > {
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
