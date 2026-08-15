export const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const adminSecret = process.env.ADMIN_SECRET_KEY || 'jp_admin_secret_2026';

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Authorization header is missing.',
    });
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

  if (token !== adminSecret) {
    return res.status(403).json({
      success: false,
      message: 'Invalid Admin Authorization Credentials.',
    });
  }

  next();
};
