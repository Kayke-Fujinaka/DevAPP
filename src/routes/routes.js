import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from '../Pages/Register'
import Users from '../Pages/Users'

function MyRoutes() {

    return (  
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes