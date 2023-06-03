import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/gym_01.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack  alignItems='center' px='40px' pt='40px' >
             <img src={Logo} alt='logo' width='200px' height='200px' />
             <Typography variant='h5' pb='40px' mt='20px' >
                Made as a Learning Project
             </Typography>
      </Stack>

    </Box>
  )
}

export default Footer
