import { FC } from 'react'
import { RedSocialButtonOutlined } from '../ui'

import { FaWhatsapp } from "react-icons/fa";
import { Box, Typography } from '@mui/material'
import { GrFacebookOption, GrLinkedinOption, GrInstagram  } from "react-icons/gr";
import { IUserProfileSocialNetworks } from '../../interfaces/userProfile';
import Link from 'next/link';


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

            <Typography textAlign='center' variant='h3'>Acerca de</Typography>
            <Typography textAlign='center' color='text.primary'>
                { description.length > 1 ? description : 'Aun no se agrego una descripcion' }
            </Typography>
            {
                socialNetworks.length == 0
                ?(
                    <></>
                )
                :(
                    <Box mt={ 3 }>
                        <Typography textAlign='center' variant='subtitle1'>Redes Sociales</Typography>
                        <Box display='flex' gap='1rem' justifyContent='center'>
                            {
                                socialNetworks.map((network, index) => (
                                    <Link href={ network.url } target='_blank' key={ index } style={{ display:'block' }}>
                                        <Typography sx={{ color:'text.primary', ':hover':{color:'primary.main', transition:'all .3s'} }}>
                                            { network.name }
                                        </Typography>
                                    </Link>
                                ))
                            }
                        </Box>
                    </Box>
                )
            }

                
        </Box>
    )
}
