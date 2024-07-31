import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail({ users }) {
  const { id } = useParams();
  const user = users.find(user => user.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetail;
