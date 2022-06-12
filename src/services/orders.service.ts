import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { OrderProductId } from '../interfaces/order.interface';
import ProductModel from '../models/product.model';

class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<OrderProductId[]> {
    const orders = await this.model.getAll();
    const getId = await Promise.all(
      orders.map(async (order) => {
        const arrayIds = await this.productModel.getOrderId(order.id);
        console.log('; arrayIds', arrayIds);
        const ids = arrayIds[0].productsIds.split(',');
        const numberId = ids.map((id) => +id);
        console.log('; numberId', numberId);
        return { ...order, productsIds: numberId };
      }),
    );
    return getId;
  }
}

export default OrderService;