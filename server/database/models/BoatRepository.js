const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select * from ${this.table} inner join tile on ${this.table}.id = tile.id`
    );

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    // Execute the SQL INSERT query to add a new program to the "program" table
    const [result] = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
