const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select * from ${this.table}
      JOIN
      tile 
      ON 
      boat.id = tile.id

`);

    // Return the array of boats
    return rows;
    
  }

  async update(boat) {
    const query = `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`;
    const values = [boat.coord_x, boat.coord_y, boat.id];

    const [result] = await this.database.query(query, values);
    return result.affectedRows; 
  }
  
}


module.exports = BoatRepository;
