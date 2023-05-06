import { FC } from 'react'
import { RedSocialButtonOutlined } from '../ui'

import { FaWhatsapp } from "react-icons/fa";
import { Box, Typography } from '@mui/material'
import { GrFacebookOption, GrLinkedinOption, GrInstagram  } from "react-icons/gr";
import { IUserProfileSocialNetworks } from '../../interfaces/userProfile';


interface Props{
    description: string;
    socialNetworks: IUserProfileSocialNetworks[]
}
export const AboutCard: FC<Props> = ({ description, socialNetworks }) => {
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
                { description.length > 1 ? description : 'Aun no se agrego una descripcion' }
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
