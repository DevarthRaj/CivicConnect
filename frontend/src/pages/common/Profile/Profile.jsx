import React, { useState } from "react";
import "./Profile.css";

const initialProfile = {
  name: "John Doe",
  email: "john@example.com",
  phone: "9876543210",
  address: "123 Main Street, City",
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
      <h2>My Profile</h2>
      {message && <div className="profile-message">{message}</div>}
      {!editMode ? (
        <div className="profile-details">
          <div>
            <strong>Name:</strong> {profile.name}
          </div>
          <div>
            <strong>Email:</strong> {profile.email}
          </div>
          <div>
            <strong>Phone:</strong> {profile.phone}
          </div>
          <div>
            <strong>Address:</strong> {profile.address}
          </div>
          <button className="profile-btn" onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSave}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>
          <div className="profile-actions">
            <button type="submit" className="profile-btn">
              Save
            </button>
            <button type="button" className="profile-btn secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;