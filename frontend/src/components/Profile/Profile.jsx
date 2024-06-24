import React from "react";

export default function Profile() {
  return (
    <div className="profile p-4">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="profile-row bg-white rounded-lg shadow-md p-8 flex items-center">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mr-12"
        />
        <div className="profile-content">
          <h3 className="text-3xl font-bold">John Doe</h3>
          <div className="mt-6">
            <span className="text-gray-600">Email</span>
            <p className="text-gray-800">johndoe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
