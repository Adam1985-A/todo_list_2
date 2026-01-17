import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;

  // 1️⃣ Check if header exists and starts with Bearer
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization Header missing' });
  }

  // 2️⃣ Extract token
  const token = authHeader.split(' ')[1];
  if(!token){
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // ✅ allow access
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
