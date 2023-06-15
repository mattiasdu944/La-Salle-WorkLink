import { FC } from 'react';

import { Box, Stack, Typography, Chip } from '@mui/material';
import { MdOutlineAccessTime, MdOutlineAttachMoney, MdWorkOutline } from "react-icons/md";
import { MoreInfoItem } from './MoreInfoItem';

interface Props {
    salary      : number;
    benefits    : string[];
    type        : string;
    workingHour : string;
    deadline    : string;
}

export const MoreInfoJobWidget: FC<Props> = ({ benefits, deadline, salary, type, workingHour }) => {
    return (
        <Box
            sx={{
                padding:'2rem 3rem',
                borderRadius:'1rem',
                border: '1px solid rgba(0,0,0,0.2)'
            }}
        >

            <MoreInfoItem icon={ <MdOutlineAttachMoney style={{ display:'flex' }}/> } title='Salario mensual' info={ `${ salary }Bs` }/>
            <MoreInfoItem icon={ <MdWorkOutline style={{ display:'flex' }}/> } title='Tipo de trabajo' info={ type }/>
            <MoreInfoItem icon={ <MdOutlineAccessTime style={{ display:'flex' }}/> } title='Tiempo de trabajo' info={ workingHour }/>
            {  
                deadline && <MoreInfoItem icon={ <MdOutlineAccessTime style={{ display:'flex' }}/> } title='Fecha limite' info={ deadline }/>
            }

            <Typography variant='subtitle1' mb={1}>Beneficios</Typography>
            <Stack direction='row' sx={{ flexWrap:'wrap', gap:1 }}>
                {
                    benefits.map(benefit => (
                        <Chip label={ benefit } color="primary" variant="outlined" />
                    ))
                }
            </Stack>
            

        </Box>
    )
}
