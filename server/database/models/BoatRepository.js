const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
      SELECT b.*, t.type, t.has_treasure
      FROM ${this.table} as b
      INNER JOIN tile as t
      ON t.coord_x = b.coord_x
      AND t.coord_y = b.coord_y
    `);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
      UPDATE ${this.table}
      SET coord_x = ?, coord_y = ?
      WHERE id = ?
    `, [boat.coord_x, boat.coord_y, boat.id]);

    // Return the array of boats
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
