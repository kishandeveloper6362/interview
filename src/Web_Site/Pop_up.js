import { Box, Typography } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';


const Pop_up = () => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 6000);
        return () => clearTimeout(timer);
    })

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <Box className={`popup ${showPopup ? 'open' : ''}`}>
            <Box className="popup-content">
                <span className="close" onClick={closePopup}>&times;</span>
                <h2>Login</h2>
                <form action="#" method="post">
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" name="username" required /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" required /><br /><br />
                    <button type="submit">Login</button>
                </form>
            </Box>
        </Box>
    )
}

export default Pop_up
