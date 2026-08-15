import express from 'express';

const router = express.Router();

// Admin login verification route
router.post('/login', (req, res) => {
  const { secretKey } = req.body;
  const adminSecret = process.env.ADMIN_SECRET_KEY || 'jp_admin_secret_2026';

  if (secretKey === adminSecret) {
    return res.status(200).json({
      success: true,
      token: adminSecret,
      message: 'Admin Authentication Successful',
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid Secret Key',
  });
});

export default router;
