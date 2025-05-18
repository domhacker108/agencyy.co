# TRAM MANAGEMENT Website

A professional website for TRAM MANAGEMENT, featuring a public-facing site and an admin dashboard for project management.

## Project Structure

```
tram-management-website/
│
├── index.html                   # Homepage (User Side)
├── projects.html                # Public Projects Page
├── contact.html                 # Contact and Inquiry Page
│
├── admin/                       # Admin Section
│   ├── login.html               # Admin Login Page
│   ├── dashboard.html           # Admin Dashboard
│   ├── upload.html              # Admin - Upload New Project Page
│   └── messages.html            # Admin - View Messages/Requests
│
├── css/                         # Stylesheets
│   ├── styles.css               # Main public styles
│   ├── admin.css                # Admin-specific styles
│   └── responsive.css           # Media queries for responsiveness
│
├── js/                          # JavaScript files
│   ├── main.js                  # Public site interactivity
│   ├── form-handler.js          # Handle contact/inquiry form submissions
│   ├── admin.js                 # Admin login logic and dashboard actions
│   └── storage.js               # Logic for localStorage or mock data
│
├── assets/                      # Static assets
│   ├── images/                  # Logos, banners, project images
│   └── icons/                   # Social media or UI icons
│
└── data/                        # JSON for mock data
    └── projects.json            # Static project data for display
```

## Features

- Responsive design for all devices
- Public project showcase
- Contact form for inquiries
- Admin dashboard for project management
- Secure admin login system
- Project upload and management
- Message/request management

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. For admin access, navigate to `/admin/login.html`

## Development

- HTML5, CSS3, and vanilla JavaScript
- No external dependencies
- Uses localStorage for data persistence
- Responsive design with mobile-first approach

## Admin Access

Default admin credentials:
- Username: admin
- Password: admin123

(Note: Change these credentials in production)

## Future Improvements

- Backend integration
- Database implementation
- User authentication system
- Image upload functionality
- Analytics integration 