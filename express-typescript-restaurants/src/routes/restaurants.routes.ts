import { Router } from "express";
import RestaurantController from "../controllers/restaurant.controller";

const restaurantRouter = Router();

const restaurantController = new RestaurantController();

restaurantRouter.get('/restaurants', restaurantController.getAll);

export default restaurantRouter;