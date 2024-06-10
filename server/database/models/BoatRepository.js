const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      // `UPDATE boat SET coord_x=${this.table.boat.coord_x}, coord_y=${this.table.boat.coord_y} WHERE id=${this.table.boat.id}`);
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return result.affectedRows;
  }
}
module.exports = BoatRepository;
