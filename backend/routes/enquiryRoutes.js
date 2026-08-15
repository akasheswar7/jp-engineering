import express from 'express';
import {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
} from '../controllers/enquiryController.js';
import { adminAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route: Submit enquiry form
router.post('/', createEnquiry);

// Protected routes: Admin access only
router.get('/', adminAuth, getEnquiries);
router.delete('/:id', adminAuth, deleteEnquiry);

export default router;
