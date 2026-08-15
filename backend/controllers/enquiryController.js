import { Enquiry } from '../models/Enquiry.js';
import mongoose from 'mongoose';

// In-memory fallback if MongoDB is not currently running locally
let mockEnquiries = [];

export const createEnquiry = async (req, res, next) => {
  try {
    const { name, phone, email, company, requirement, preferredBrand, message } = req.body;

    if (!name || !phone || !email || !requirement) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, phone, email, requirement.',
      });
    }

    let savedEnquiry;

    if (mongoose.connection.readyState === 1) {
      savedEnquiry = await Enquiry.create({
        name,
        phone,
        email,
        company: company || '',
        requirement,
        preferredBrand: preferredBrand || 'Not Sure',
        message: message || '',
      });
    } else {
      console.warn('[DB Warning] MongoDB disconnected. Storing in temporary mock storage.');
      savedEnquiry = {
        _id: 'mock_' + Date.now(),
        name,
        phone,
        email,
        company: company || '',
        requirement,
        preferredBrand: preferredBrand || 'Not Sure',
        message: message || '',
        status: 'New',
        createdAt: new Date().toISOString(),
      };
      mockEnquiries.unshift(savedEnquiry);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your HVAC enquiry has been submitted successfully to JP Engineering.',
      data: savedEnquiry,
    });
  } catch (error) {
    next(error);
  }
};

export const getEnquiries = async (req, res, next) => {
  try {
    const { brand, search } = req.query;

    if (mongoose.connection.readyState === 1) {
      let query = {};

      if (brand && brand !== 'All') {
        query.preferredBrand = brand;
      }

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { phone: { $regex: search, $options: 'i' } },
          { requirement: { $regex: search, $options: 'i' } },
        ];
      }

      const enquiries = await Enquiry.find(query).sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        count: enquiries.length,
        data: enquiries,
      });
    } else {
      let filtered = [...mockEnquiries];

      if (brand && brand !== 'All') {
        filtered = filtered.filter((e) => e.preferredBrand === brand);
      }

      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (e) =>
            e.name.toLowerCase().includes(s) ||
            e.email.toLowerCase().includes(s) ||
            e.phone.toLowerCase().includes(s) ||
            e.requirement.toLowerCase().includes(s)
        );
      }

      return res.status(200).json({
        success: true,
        count: filtered.length,
        data: filtered,
        note: 'Serving from memory (MongoDB offline)',
      });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteEnquiry = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (mongoose.connection.readyState === 1) {
      const enquiry = await Enquiry.findByIdAndDelete(id);
      if (!enquiry) {
        return res.status(404).json({ success: false, message: 'Enquiry not found' });
      }
    } else {
      mockEnquiries = mockEnquiries.filter((e) => e._id !== id);
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
