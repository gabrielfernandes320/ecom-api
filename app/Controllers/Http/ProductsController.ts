// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async index() {
    const products = await Product.all()
    return products
  }

  public async show({ params }) {
    const product = await Product.find(params.id)
    return product
  }
}
