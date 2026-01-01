import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get("/protected", authMiddleware, (req: Request, res: Response) => {
  res.json({
    message: "You accessed a protected route 🎉",
    user: (req as any).user,
  });
});

export default router;
