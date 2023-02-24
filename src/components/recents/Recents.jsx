import { Box, Grid } from '@mui/material'
import React from 'react'
import Card from '../card/Card'
import Image5 from '../../static/Image5.jpg'


const Recents = () => {
  return (
    <Box mt={3}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
      <Grid item>
        <Card cardImage={Image5} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={Image5} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={Image5} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={Image5} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card cardImage={Image5} />
      </Grid>
    </Grid>
  </Box>
  )
}

export default Recents