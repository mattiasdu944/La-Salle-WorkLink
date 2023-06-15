import { Avatar, Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

export const NewJobWidgets: FC = () => {
    return (
        <Box
            sx={{
                border:'1px solid rgba(0,0,0,0.1)',
                borderRadius: '.75rem',
                padding:'2rem 3rem',
                position:'sticky',
                top:'5rem'

            }}
        >
            <Typography variant='subtitle1' mb={2}>Vacantes Populares</Typography>
                {
                    [1,2,3,4,5].map((_,index) =>
                    <Grid key={index} container mb={ 3 } sx={{ alignItems:'center', justifyContent:'space-between' }}>
                        <Grid item xs={ 3 }>
                            <Avatar
                                src='https://images.pexels.com/photos/6097766/pexels-photo-6097766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                sx={{ width:'50px', height:'50px' }}
                            />

                        </Grid>
                        <Grid xs={ 9 }>
                            <Typography variant='subtitle2' mb={ 0 }>Titulo de la vancante</Typography>
                            <Typography color='text.primary'>@Samsung_Bo</Typography>
                        </Grid>
                    </Grid>
                    )
                }
        </Box>
    )
}
