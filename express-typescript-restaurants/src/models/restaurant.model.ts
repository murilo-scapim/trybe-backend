import connection from "./connection";
import Restaurant from "../interfaces/restaurant.interface"

class RestaurantModel {
    public RestaurantModel() {}

    getAll = async (): Promise<Restaurant[]> => {
        const sql = 'SELECT * FROM restaurants';
        const [rows] = await connection.query(sql);
        return rows as Restaurant[];
    }
};