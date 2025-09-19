import React from 'react';

const UserCard = ({ user, avatarUrl }) => {
  const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <div className="ec-card" style={{ padding: 10, margin: '20px 0' }}>
      {/* Add 'align-items-center' to vertically center the image and text */}
      <div className="row no-gutters align-items-center">
        <div className="col-auto">
          <img
            src={avatarUrl}
            alt={user.name}
            style={{ width: 200, height: 200 }}
          />
        </div>
        
        <div className="col pl-4"> {/* Added some padding-left (pl-4) for space */}
          {/* THE FIX: The <div className="card-body"> wrapper has been REMOVED 
            from around this content to eliminate the extra padding.
          */}
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Address:</strong> {fullAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;