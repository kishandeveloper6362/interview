import { Box, Typography } from '@mui/material'
import React from 'react'

const Popup = () => {
    return (
        <Box className="overlay" id="overlay">
            <Box className="popup" id="popup">
                <Typography variant='h2'>Login</Typography>
            </Box>
        </Box>
    )
}

export default Popup
