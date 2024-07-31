import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserDetail from './UserDetail';

const users = [
    { id: '1', name: 'Leanne Graham', age: 30, email: "john@gmail.com" },
    { id: '2', name: 'Jane Smith', age: 25, email: "Jane@gmail.com" },
    { id: '3', name: 'Alice Johnson', age: 28, email: "Alice@gmail.com" },
];

function App() {
    return (
        <Router>
            <div>
                <h1>User List</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>

                <Routes>
                    <Route path="/user/:id" element={<UserDetail users={users} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
