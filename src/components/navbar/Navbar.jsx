import React, { useState } from 'react'
import { AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { FacebookOutlined, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material';

const Navbar = () => {

    const StyledToolBar= styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    });

    const StyledSocialBox= styled(Box)({
        display:"flex",
        gap:10,
    })

    const MenuBox=styled(Box)({
        display: "flex",
        gap: 30,
    });

    const SearchBox= styled(Box)({
        display: "flex",
        gap: 5,
    })

    const [open, setOpen]=useState(false)

    const MenuItems= [
    {Name:"Home", Link: '#'},
    {Name:"Networking", Link: '#'},
    {Name:"Programming", Link: '#'},
    {Name:"DevOps", Link: '#'},
    {Name:"Kubernetes", Link: '#'},
    {Name:"Cloud", Link: '#'}]

  return (
    <AppBar position='static' sx={{background:"black"}}>
       <StyledToolBar>
        <StyledSocialBox>
            < FacebookOutlined/>
            <Instagram />
            < Twitter/>
        </StyledSocialBox>
        <MenuBox sx={{display:{xs:'none', sm:'none', md:'flex'}}}>
            { MenuItems.map((item)=>(
                <Typography sx={{ cursor: "pointer", fontsize: "14px"}}>{item.Name}</Typography>
                ))}
        </MenuBox>
        <SearchBox><InputBase placeholder='Search..' sx={{color: 'whitesmoke'}}/>
        <MenuIcon onClick={()=> setOpen(!open)} sx={{color: 'white', display:{xs:'block', sm:'block', md: 'none' }}}/>   
        </SearchBox>
        </StyledToolBar> 
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
       { MenuItems.map((item)=>(
                <MenuItem sx={{ cursor: "pointer", fontsize: "14px"}}>{item.Name}</MenuItem>
                ))} 
         </Box>
      </Menu>
     
    </AppBar>
  )
}

export default Navbar