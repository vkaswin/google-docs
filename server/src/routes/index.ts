import { Router } from "express";
import UserRoutes from "./user";

const router = Router();

router.use("/api/user", UserRoutes);

router.get("/api/health-check", (req, res) => {
  res.status(200).send({
    status: "success",
    data: {
      message: "Service is running smoothly",
      version: "1.0.0",
    },
  });
});

export default router;
