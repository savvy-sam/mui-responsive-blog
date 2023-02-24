import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../../static/Image1.jpg'
import Image2 from '../../static/Image2.jpg'
import Image4 from '../../static/Image4.jpg'

const Categories = () => {

const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundReapeat:"no-repeat",
    backgroundPosition:"center",
    backgroundsize:"cover" 
});

const StyledTitle= styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"white",
    opacity: "0.8"

})
  return (
    <Box>
        <Stack direction={{xs: 'column', sm:"row"}} mt={3} spacing={{xs:1, sm:2, md:4}}>
            <StyledBox sx={{backgroundImage:`url(${Image1})`}}><StyledTitle align="center" variant="h3">Networking</StyledTitle></StyledBox>
            <StyledBox sx={{backgroundImage:`url(${Image2})`}}><StyledTitle align="center" variant="h3">DevOps</StyledTitle></StyledBox>
            <StyledBox sx={{backgroundImage:`url(${Image4})`}}><StyledTitle align="center" variant="h3">Kubernetes</StyledTitle></StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories