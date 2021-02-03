import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        description: 'produto muito bom',
        name: 'produto teste',
        quantity: 10,
      },
      {
        description: 'produto muito bom 2',
        name: 'produto teste 2',
        quantity: 10,
      },
      {
        description: 'produto muito bom 3',
        name: 'produto teste 3',
        quantity: 10,
      },
      {
        description: 'produto muito bom 4',
        name: 'produto teste 4',
        quantity: 10,
      },
      {
        description: 'produto muito bom 5',
        name: 'produto teste 5',
        quantity: 10,
      },
      {
        description: 'produto muito bom 6',
        name: 'produto teste 6',
        quantity: 10,
      },
      {
        description: 'produto muito bom 7',
        name: 'produto teste 7',
        quantity: 10,
      },
      {
        description: 'produto muito bom 8',
        name: 'produto teste 8',
        quantity: 10,
      },
    ])
  }
}
