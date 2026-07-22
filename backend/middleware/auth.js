import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const authorization = req.header("Authorization");
  if (!authorization?.startsWith("Bearer ")) return res.status(401).json({ message: "Authentication is required" });
  try {
    req.user = jwt.verify(authorization.slice(7), process.env.JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ message: "Your session is invalid or has expired" });
  }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== "admin") return res.status(403).json({ message: "Administrator access is required" });
  return next();
}
