import React, { useState } from "react";
import "./Profile.css";

const initialProfile = {
  name: "John Doe",
  email: "john@example.com",
  phone: "9876543210",
  address: "123 Main Street, City",
  bio: "Passionate civic engagement advocate",
  joinDate: "January 2024",
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(profile);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditMode(true);
    setForm(profile);
    setMessage("");
  };

  const handleCancel = () => {
    setEditMode(false);
    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(form);
    setEditMode(false);
    setMessage("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-section">
          <div className="avatar">
            <span>{profile.name.charAt(0)}</span>
          </div>
          <div className="header-info">
            <h1>{profile.name}</h1>
            <p className="bio">{profile.bio}</p>
            <span className="join-date">Member since {profile.joinDate}</span>
          </div>
        </div>
      </div>
      
      {message && <div className="profile-message">{message}</div>}
      
      {!editMode ? (
        <div className="profile-content">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <span className="info-value">{profile.email}</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <div className="info-details">
                <span className="info-label">Phone</span>
                <span className="info-value">{profile.phone}</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <span className="info-label">Address</span>
                <span className="info-value">{profile.address}</span>
              </div>
            </div>
          </div>
          <button className="edit-btn" onClick={handleEdit}>
            <span>✏️</span> Edit Profile
          </button>
        </div>
      ) : (
        <div className="edit-form-container">
          <h3>Edit Profile</h3>
          <form className="profile-form" onSubmit={handleSave}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled
                placeholder="Your email address"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Enter your address"
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                rows="3"
              />
            </div>
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;