# JP ENGINEERING - Premium Air Conditioning & HVAC Solutions Website

A complete, high-end, responsive full-stack website built for **JP ENGINEERING**, a leading air-conditioning and HVAC solutions dealer/supplier in Visakhapatnam, Andhra Pradesh, dealing in **Daikin**, **LG**, and **Hitachi**.

---

## 🌟 Technology Stack

- **Frontend**: HTML5, CSS3 (Vanilla CSS with design tokens, glassmorphism, responsive grid), Vanilla JavaScript (Modular ES6 standard).
- **Backend**: Node.js, Express.js (REST API architecture).
- **Database**: MongoDB with Mongoose Schema validation.
- **Security & Utilities**: CORS, dotenv, input validation, protected admin authentication.

---

## 📂 Project Structure

```
c:/jp engineering 2/
├── frontend/
│   ├── index.html          # Main Landing Page with Brand Showcase
│   ├── about.html          # Corporate Positioning, Mission, Vision & Values
│   ├── products.html       # Catalogue with Daikin / LG / Hitachi Filters
│   ├── services.html       # Detailed AC & HVAC Services & Maintenance
│   ├── projects.html       # Sample Project Showcase with Category Filtering
│   ├── industries.html     # Industries & Sectors Served
│   ├── contact.html        # Visakhapatnam Address & Enquiry Quote Form
│   ├── admin.html          # Protected Admin Portal for Enquiries
│   ├── css/
│   │   └── style.css       # Full Design System & Responsive Stylesheet
│   └── js/
│       ├── main.js         # Mobile Menu, Sticky Header, FAQ Accordion
│       ├── api.js          # Form Submission & Toast Notifications
│       ├── filtering.js    # Product & Project Interactive Filters
│       └── admin.js        # Admin Dashboard Fetch, Search & Delete
├── backend/
│   ├── package.json        # Express & Mongoose Dependencies
│   ├── server.js           # Server Entry & Static File Delivery
│   ├── .env.example        # Environment Variables Template
│   ├── .env                # Local Server Configuration
│   ├── config/
│   │   └── db.js           # MongoDB Connection Manager
│   ├── models/
│   │   └── Enquiry.js      # Mongoose Schema
│   ├── routes/
│   │   ├── enquiryRoutes.js
│   │   └── authRoutes.js
│   ├── controllers/
│   │   └── enquiryController.js
│   └── middleware/
│       ├── authMiddleware.js
│       └── errorHandler.js
├── README.md               # Documentation
├── robots.txt              # Search Engine Crawler Directives
└── sitemap.xml             # XML Sitemap for Visakhapatnam Local SEO
```

---

## 🚀 How to Run locally

### 1. Install Backend Dependencies

Navigate to the `backend` folder and run `npm install`:

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

The `.env` file is pre-configured for local execution:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/jp_engineering_db
ADMIN_SECRET_KEY=jp_admin_secret_2026
NODE_ENV=development
```

### 3. Start the Server

```bash
npm start
```

Open your browser and visit:
`http://localhost:5000`

---

## 🔐 Admin Dashboard Access

1. Open `http://localhost:5000/admin.html`
2. Enter Secret Authorization Key: `jp_admin_secret_2026`
3. View, search, filter by brand (Daikin, LG, Hitachi), and delete customer enquiries.

---

## 🏢 Business Positioning Guidelines

- **Entity**: JP ENGINEERING (Visakhapatnam, AP)
- **Brands**: Dealer/Supplier in Daikin, LG, and Hitachi.
- **Compliance**: Neutral, accurate dealer positioning without making unauthorized official partner/exclusive claims.
