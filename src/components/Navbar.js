import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material' 

import Logo from '../assets/images/icons8-bench-press.gif'
import { height } from '@mui/system'

const Navbar = () => {
  return (
    <Stack className='navbar' direction='row' justifyContent='space-around' sx={{gap: {
      sm : '122px', xs: '40px'
    } , mt: { sm:'32px', xs:'20px'}, justifyContent:'none' }} px='20px'>

      <Link to='/'>
        <img src={Logo} alt='logo' style={{
          width:'60px', height:'60px', margin:'0px 0px 0px 20px', border:'1px solid #FF2625', padding: '3px' }} />
      </Link>

    {/* <Stack
     direction='row' gap='40px' fontSize='24px' alignItems='flex-end' className='a-navbar-stack'
    >
    </Stack> */}
    <ul>

    <li><a href='/' className='a-navbar navbar-home'>Home</a></li>
    <li><a href='#exercises' className='a-navbar navbar-exercises' >Exercises</a></li>
    
    </ul>
    </Stack>
  )
}

export default Navbar


//style={{textDecoration: 'none' , color:'#3A1212' , borderBottom:'3px solid #FF2625'}}
//style={{textDecoration: 'none' , color: '#3A1212'}}
//<Link to='/' className='navbar-home' >Home</Link>