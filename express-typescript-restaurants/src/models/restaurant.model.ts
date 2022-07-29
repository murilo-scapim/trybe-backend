import Restaurant from "../interfaces/restaurant.interface"
import { Pool } from "mysql2/promise"

class RestaurantModel {
    public connection: Pool;
    
    public constructor(connection: Pool) {
        this.connection = connection;
    }

    getAll = async (): Promise<Restaurant[]> => {
        const sql = 'SELECT * FROM restaurants';
        const [rows] = await this.connection.query(sql);
        return rows as Restaurant[];
    }
};

export default RestaurantModel;