export namespace Products {
  interface Rating {
    rate: number;
    count: number;
  }

  interface Root {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
}
