import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name').notNullable()
      table.string('description').nullable()
      table.string('cover_image_url').nullable()
      table.bigInteger('quantity').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
