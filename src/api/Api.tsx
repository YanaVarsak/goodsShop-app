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
  items: {
    id: string;
    label: string;
    price: number;
    description: string;
    img: string;
  }[];
}

interface Good {
  id: string;
  label: string;
  categoryTypeId: string;
  img: string;
  price: number;
  description: string;
}

export class Api {
  getDataGoods(
    params: { ids?: string; categoryTypeIds?: string } = {}
  ): Promise<Goods[]> {
    const clearParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => value !== undefined)
    );
    const queryParams = new URLSearchParams(clearParams).toString()
    return fetch(`/api/goods?${queryParams}`).then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        }
      }
    );
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

  getDataPopularCategory(): Promise<PopularCategory[]> {
    return fetch("/api/popular_categories").then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataCart() {
    return fetch("/api/cart").then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("cart not working");
    });
  }

  putDataCart(cartForPut: Good) {
    return fetch("/api/cart", {
      method: "PUT",
      body: JSON.stringify(cartForPut),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  deleteDataCart(cartForDelete: Good) {
    return fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify(cartForDelete),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }
}
