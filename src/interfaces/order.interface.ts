interface Order {
  id: number;
  userId: number;
}

interface OrderProductId extends Order {
  productsIds: number[]
}

export { Order, OrderProductId };
