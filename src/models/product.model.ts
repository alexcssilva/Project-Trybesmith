import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, ProductId } from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products;');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getOrderId(id: number): Promise<ProductId[]> {
    const result = await this.connection
      .execute(`
      SELECT group_concat(id) as productsIds FROM Trybesmith.Products WHERE orderId=?;`, [id]);
    const [rows] = result;
    return rows as [ProductId];
  }
}