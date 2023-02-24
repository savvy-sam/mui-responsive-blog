import styled from '@emotion/styled'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const FooterTypography= styled(Typography)({

    color: "white",
    align: "center"

})

const SocialBox=styled(Box)({
    display: 'flex',
    gap:10,
    color: 'white'
})

const Footer = () => {
  return (
    <Box sx={{background:'black', height:"300px"}}>
    <Stack direction={{xs: 'row', md:'row'}} p={7} >
        <Box flex={1} >
            <FooterTypography>Contact Us</FooterTypography>
            <FooterTypography>Careers</FooterTypography>
            <FooterTypography>Samson</FooterTypography>
            <FooterTypography>Chege</FooterTypography>
            <FooterTypography>Samson </FooterTypography>
            <FooterTypography>Chege</FooterTypography>
        </Box>
        <Box flex={1}>
        <FooterTypography>Contact Us</FooterTypography>
            <FooterTypography>Careers</FooterTypography>
            <FooterTypography>Samson</FooterTypography>
            <FooterTypography>Cookies</FooterTypography>
            <FooterTypography>Data Policy </FooterTypography>
            <FooterTypography>Chege</FooterTypography>
        </Box>
        <Box flex={1}>
        <FooterTypography>Contact Us</FooterTypography>
            <FooterTypography>Careers</FooterTypography>
            <FooterTypography>Samson</FooterTypography>
            <FooterTypography>Chege</FooterTypography>
            <FooterTypography>Samson </FooterTypography>
            <FooterTypography>Chege</FooterTypography>
        </Box>
        <Box>
            <FooterTypography>Follow US</FooterTypography>
            <SocialBox>
                < Facebook/>
                < Instagram/>
                < Twitter/>
            </SocialBox>

        </Box>
    </Stack>
    </Box>
  )
}

export default Footer