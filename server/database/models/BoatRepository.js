const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    let query = `SELECT b.* , t.type, t.has_treasure
    FROM ${this.table} AS b
    INNER JOIN tile AS t
    ON t.coord_x = b.coord_x
    AND t.coord_y = b.coord_y
    `;
    
    const params = [];

    if (where && where.name) {
      query += `WHERE b.name = ?`;
      params.push(where.name);
    }

    const [rows] = await this.database.query(query, params);
    // Return the array of boats
    return rows;
  }

  async update(boat) {
    // Execute the SQL UPDATE query to update a specific boat
    const [result] = await this.database.query(
      `update ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
