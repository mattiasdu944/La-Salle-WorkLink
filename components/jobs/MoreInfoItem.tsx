import { FC } from 'react';

import { Box, Typography } from '@mui/material';


interface Props{
    icon: JSX.Element;
    title: string;
    info: number | string;
}

export const MoreInfoItem: FC<Props> = ({ icon, info, title }) => {
    return (
        <Box mb={ 2 } sx={{ display:'flex', alignItems:'center', gap:2 }}>
            <Box sx={{ border:'1px solid rgba(0,0,0,0.3)', padding:'.75rem', borderRadius:'50%', fontSize:'2rem' }}>
                { icon }
            </Box>
            <Box>
                <Typography variant='subtitle1'>{ title }</Typography>
                <Typography>{ info }</Typography>
            </Box>
        </Box>
    )
}
