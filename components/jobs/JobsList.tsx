import { IVacant } from '@/interfaces'
import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { JobCard } from './JobCard'


interface Props{
    vacants: IVacant[]
}

export const JobsList: FC<Props> = ({ vacants }) => {
    return (
        <Box>
            {
                vacants.map( vacant => 
                    <JobCard key={ vacant._id } vacant={ vacant }/>    
                )
            }
        </Box>
    )
}
