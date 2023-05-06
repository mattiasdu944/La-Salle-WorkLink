import { FC } from 'react'
import { RedSocialButtonOutlined } from '../ui'


import { FaWhatsapp } from "react-icons/fa";
import { Box, Typography } from '@mui/material'
import { GrFacebookOption, GrLinkedinOption, GrInstagram  } from "react-icons/gr";

export const AboutCard: FC = () => {
    return (
        <Box 
            sx={{
                border:'1px rgba(0,0,0, 0.1) solid',
                borderRadius:'1rem',
                padding:'2rem',
                mb:'2rem'
            }}
        >

            <Typography variant='h3'>Acerca de</Typography>
            <Typography color='text.primary' mb={ 3 }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic ullam facere consequuntur sed accusantium esse error quis consequatur, obcaecati provident maiores exercitationem quas alias dignissimos nisi harum quaerat ipsam!
                Aliquam consequuntur illo veniam dolorum illum voluptate non dolor! Sint ab minus tempora molestias dolorum officia modi sequi facilis vitae. Totam nostrum cumque similique voluptate laboriosam eos nemo. Ex, harum.
            </Typography>
            <Box>
                <Typography variant='subtitle1'>Redes Sociales</Typography>
                <Box display='flex' gap='1rem'>
                    <RedSocialButtonOutlined>
                        <GrFacebookOption style={{ padding:0 }}/>
                    </RedSocialButtonOutlined>

                    <RedSocialButtonOutlined>
                        <GrLinkedinOption/>
                    </RedSocialButtonOutlined>
                    
                    <RedSocialButtonOutlined>
                        <FaWhatsapp/>
                    </RedSocialButtonOutlined>

                    <RedSocialButtonOutlined>
                        <GrInstagram/>
                    </RedSocialButtonOutlined>
                </Box>
            </Box>
                
        </Box>
    )
}
