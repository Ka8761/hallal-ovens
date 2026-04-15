export interface Food {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tag: string;
}

export interface CartItem extends Food {
  quantity: number;
}