interface Goods {
  id: number;
  label: string;
  category_type: string;
  img: string;
  price: number;
  description: string;
}
interface Category {
  id: number,
  label: string,
  type: string,
}



export class Api {
  getDataGoods(): Promise<{ items: Goods[] }> {
    // опечатка в урле
    return fetch("/api/goods").then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataCategory(): Promise<{ categories: Category[] }> {
    // опечатка в урле
    return fetch("/api/categories").then((resp) => {
      if (resp.ok) {
        const res = resp.json();
        console.log({ res });
        return res;
      }
    });
  }

  getDataPopularCategory(id?: number): Promise<{category: Category[] }> {
    // опечатка в урле
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
