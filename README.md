# Blood & Connect

## Credentials
Admin - email: admin@email.com || password: admin
User - email: user@email.com || password: user

## Live Site
[Blood & Connect](https://blood-donation-client-black.vercel.app/) - https://blood-donation-client-black.vercel.app/

## Overview
The Blood Donation website is a user-centric platform designed to facilitate blood donations by connecting donors with recipients. It includes features for searching and filtering donors, detailed donor profiles, user account management, and administrative tools for overseeing site activity and user accounts. The aim is to promote and streamline the process of blood donation, ensuring that those in need can easily find willing donors and that the donation process is secure, efficient, and user-friendly.

## Technologies Used

### Frontend
- **TypeScript**
- **Next.js**
- **MUI (Material-UI)**

### Backend
- **Express.js**
- **TypeScript**
- **Prisma**
- **PostgreSQL**

## Installation and Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mthtitumir/blood-donation-client.git
   ```

2. **Install dependencies:**
   - For the frontend:
     ```sh
     npm install
     ```

3. **Set up environment variables:**
   - Create a `.env` file in both the `frontend` and `backend` directories and add the necessary environment variables.

4. **Run the development servers:**
   - For the frontend:
     ```sh
     npm run dev
     ```

## Features

### Home Page/Landing Page
- **Header:**
  - Logo: Prominently displayed website logo.
  - Navigation Bar: Links to Home, About Us, Login/Register (if not logged in), My Profile (if logged in).
- **Hero Section:**
  - Catchy Headline: Promoting blood donation (e.g., "Save Lives, Donate Blood!").
  - Button: "Search Donors" button that redirects to the Donor List page with search options.
- **About Section (About Us):**
  - Content: Brief description of the website's purpose and mission.
  - Team Information: Information about the team behind the website (optional).
- **Search Blood Donors:**
  - Search and Filter Options: Allow users to search for blood donors by blood type, location, and availability.
  - Donor Cards: Display up to 10 recent donor profiles in card format.
    - Each card includes: Donor's name, Photo (optional), Blood type, Location, Availability status, Link to the full donor details page.
- **Coverage Area:**
  - Map or List: Show the areas covered by the blood donation service, highlighting regions with available donors.
- **Footer:**
  - Contact Information: Email address, phone number, social media links.
  - Copyright Information: Standard copyright details.
  - Additional Links: Terms of Use, Privacy Policy, etc.

### Login & Registration
- **Login Form:**
  - Fields: Username or email address, Password.
- **Registration Form:**
  - Fields: Username, Email address, Password (with confirmation), Option to donate blood (Yes/No), Additional details (e.g., blood type, location).

### Donor List Page
- **Features:**
  - Search and Filter Options: Blood type, Location, Availability status.
  - Donor Cards: Display donor profiles in card format with pagination.
    - Each card includes: Donor's name, Photo (optional), Blood type, Location, Availability status, Link to the full donor details page.

### Donor Details Page
- **Features:**
  - Donor Information: Detailed information about the donor, including Name, Photo (optional), Blood type, Location, Availability status, Contact details (visible only after request approval).
  - Request Blood Button: Button to initiate a request for blood donation (redirects to Blood Request page).

### Blood Request Page (Private)
- **Features:**
  - Form Fields: Requester's contact information (prefilled from profile if possible), Additional Information (Hospital name, date, time, etc), Agreement to terms and conditions.
  - Submit Button: Submit the blood request.

### My Profile
- **User Account Information:**
  - Edit Profile: Options to edit username, email, and other details.
  - Change Password: Link to Change Password page.
- **Subsections:**
  - **My Blood Requests:**
    - List of blood requests made by the user.
    - Details for each request: Donor's name, Blood type, Status of the request (pending, approved, rejected), see contact information of the donor (if approved).
  - **Requests for Blood to Me:**
    - List of blood requests received by the user.
    - Details for each request: Requester's name, Blood type needed, Status of the request (pending, approved, rejected), Option to accept/reject the request and change status, Display contact details of the requester (if approved).
  - **Change Password Page:**
    - Fields: Current password, New password (with confirmation).

### Admin Dashboard
- **User Management:**
  - View and Manage User Accounts: Activate/deactivate accounts, edit roles.

### About Us
- **Content:**
  - Mission Statement: Brief description of the website's purpose and mission.
  - Team Information: Information about the team behind the website.
  - Contact Information: Email address, phone number, social media links.

### Additional Considerations
- **Secure Login System:** Implement password hashing to ensure secure login.
- **Responsive Design:** Ensure the website is accessible and user-friendly on various devices (desktops, tablets, mobile phones).


## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

---

Thank you for using and contributing to the Blood Donation website. Your support helps save lives!

---
