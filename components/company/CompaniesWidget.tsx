import React, { FC } from 'react'
import { ICompany } from '@/interfaces'

import { Avatar, Box, Grid, Typography } from '@mui/material';

interface Props{
    companies: ICompany[];
}

export const CompaniesWidget: FC<Props> = ({ companies }) => {
    return (
        <Box
            sx={{
                border:'1px solid rgba(0,0,0,0.1)',
                borderRadius: '.75rem',
                padding:'2rem 3rem',
            }}
        >
            <Typography variant='subtitle1' mb={2}>Empresas</Typography>
                {
                    companies.map(( company ) =>
                    <Grid key={ company._id } container mb={ 3 } sx={{ alignItems:'center', justifyContent:'space-between' }}>
                        <Grid item xs={ 3 }>
                            <Avatar
                                src={ company.image }
                                sx={{ width:'50px', height:'50px' }}
                            />

                        </Grid>
                        <Grid xs={ 9 }>
                            <Typography variant='subtitle2' mb={ 0 }>{ company.name }</Typography>
                            <Typography color='text.primary'>{ company.username }</Typography>
                        </Grid>
                    </Grid>
                    )
                }
        </Box>
    )
}
