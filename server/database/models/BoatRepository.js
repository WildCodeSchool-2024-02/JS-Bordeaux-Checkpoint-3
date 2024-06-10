const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `SELECT boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure FROM ${this.table}
      INNER JOIN tile ON boat.coord_x=tile.coord_x AND boat.coord_y=tile.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(item) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? where id=?`,
      [item.coord_x, item.coord_y, item.id]
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
