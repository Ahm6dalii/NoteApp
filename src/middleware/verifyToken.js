import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  jwt.verify(req.headers.token, "secret", async (err, decode) => {
    if (err) return res.status(401).json({ message: "ERROR", err });

    req.user = decode;
    next();
  });
};
