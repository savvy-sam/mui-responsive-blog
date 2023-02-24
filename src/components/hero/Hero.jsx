import { Box, Typography } from '@mui/material'
import React from 'react'
import image3 from '../../static/Image3.jpg'
function Hero() {
  return (
    <Box>
        <Typography variant="h3" align="center" sx={{fontWeight:900}}>
            Tech<b style ={{color: 'red'}} >Scroll</b>
        </Typography>
        <Typography variant='body2' align='center' sx={{fontWeight: 100}}>Your Go To Tech Space</Typography>
        <Box sx={{
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image3})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize:"cover",
          height: 600,
          width:"100%",
          display: 'flex',
          justifyContent:"center"
        }} > 
        <Box  sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}>
        <Box sx={{background: "white", opacity: "0.8", pt: 4}}>
          <Typography variant="h6" color="tomato" align="center" pt={8}> The Tech News You Want to Always</Typography>
          <Typography variant="h4" align="center">Brought to Your Device</Typography>
          <Typography variant="body1" align="center" pb={8}>The Tech Scroll</Typography>
        </Box>
        </Box>
        </Box>
    </Box>
   
    
  )
}

export default Hero