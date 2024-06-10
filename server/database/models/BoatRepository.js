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

  async update(updateBoat) {
    // Execute the SQL UPDATE query to modify a boat from the "boat" table
    const [result] = await this.database.query(`UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`, [updateBoat.coord_x, updateBoat.coord_y, updateBoat.id]);

    // Return the affectedRows
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
