import { Router } from "express";
import { healthcheck, healthcheckError } from "../controllers/Healthcheck.js";

const router = Router();

router.route("/").get(healthcheck); // Healthcheck route
router.route("/error").get(healthcheckError); // Healthcheck error route

export default router; // Export the router for use in other modules
