import { Box, CardMedia, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Image5 from '../../static/Image5.jpg'
import Rightbar from '../rightbar/Rightbar'

const Post = () => {
  return (
    <Box>
        <Box sx={{
            backgroundImage:`url(${Image5})`,
            backgroundPosition: "center",
            backgroundSize:"cover",
            height:"250px"
        }}>

                <Typography align="center" color="black" variant='h2' sx={{fontWeight:900, padding:10}}>
                    Post Title
                </Typography>
        </Box>
                <Container>
                    <hr />
                    <Stack direction={{xs:"collumn", md:"row"}}
                    spacing={{xs: 1, sm: 2, md: 8}}
                    mt={8}>

        <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Typography
              m={4}
              align="center"
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              laudantium voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam?
            </Typography>
            <CardMedia
              component="img"
              height="300px"
              image={Image5}
              alt="green iguana"
            />
            <Typography align="center" variant="h4" mt={2}>
              wait for it wait
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              laudantium voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Aut laudantium
              voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Aut laudantium
              voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam?
            </Typography>
           </Box> 
          <Box flex={1}>
            <Rightbar />
          </Box>
            </Stack>
            </Container>
    </Box>
  );
};

export default Post