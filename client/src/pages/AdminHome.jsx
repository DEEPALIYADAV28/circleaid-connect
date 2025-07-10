import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css";
import { FaUserFriends, FaHandshake, FaClipboardList, FaExclamationCircle } from "react-icons/fa";

export default function AdminHome() {
  return (
    <div className="admin-home-container">
      <div className="admin-home-overlay">
        <h1 className="admin-home-title">Welcome, Admin 👋</h1>
        <p className="admin-home-subtitle">Manage the platform efficiently from one place.</p>

        <div className="admin-home-cards">
          <Link to="/admin/Users" className="admin-card">
            <FaUserFriends className="admin-card-icon" />
            <h3>Users</h3>
            <p>Manage user accounts, roles, and activity</p>
          </Link>

          <Link to="/admin/NGOs" className="admin-card">
            <FaHandshake className="admin-card-icon" />
            <h3>NGOs</h3>
            <p>Verify NGO profiles and review their needs</p>
          </Link>

          <Link to="/admin/Requests" className="admin-card">
            <FaClipboardList className="admin-card-icon" />
            <h3>Requests</h3>
            <p>Review donation and help requests</p>
          </Link>

          <Link to="/admin/Reports" className="admin-card">
            <FaExclamationCircle className="admin-card-icon" />
            <h3>Reports</h3>
            <p>Check reported content or abuse cases</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
