import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      default: '',
      trim: true,
    },
    requirement: {
      type: String,
      required: [true, 'Requirement details are required'],
      trim: true,
    },
    preferredBrand: {
      type: String,
      enum: ['Daikin', 'LG', 'Hitachi', 'Not Sure', 'Other'],
      default: 'Not Sure',
    },
    message: {
      type: String,
      default: '',
      trim: true,
    },
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Contacted', 'Resolved'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
