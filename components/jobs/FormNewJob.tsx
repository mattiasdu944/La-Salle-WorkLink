import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'

import { IVacant, IVacantRequirements } from '@/interfaces'
import { Box, Button, FilledInput, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

interface Props {
    setNewJob: Dispatch<SetStateAction<IVacant>>
    setBenefits: Dispatch<SetStateAction<string[]>>;
    setRequirements: Dispatch<SetStateAction<IVacantRequirements>>
    
    newJob: IVacant;
    benefits: string[];
    requirements: IVacantRequirements;
}

export const FormNewJob: FC<Props> = ({ setNewJob, newJob, requirements, setRequirements, benefits, setBenefits }) => {
    const [benefit, setBenefit] = useState<string>('');

    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setNewJob({...newJob, requirements, benefits  })
    }
    
    const handleFormRequirements = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setRequirements({ ...requirements, [e.target.name]: e.target.value })
    }
    
    const handleFormBenefits = () => {
        if( benefit.trim() == '' ){
            return
        }
        setBenefits([...benefits, benefit]);
        setBenefit('')
    }

    const handleFormNowJob = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewJob({ ...newJob, [e.target.name]: e.target.value })
    }




    return (
        <Box>
            <Box 
                sx={{ 
                    display:'flex', 
                    flexDirection:{ xs:'column', md:'row' }, 
                    gap:'1rem',
                    justifyContent:'space-between' 
                }}>
                <Box sx={{ display: 'grid', rowGap: '1rem', width:'100%' }}>
                    <Typography variant='h3'>Informacion general</Typography>
                    <TextField
                        type='text'
                        name='title'
                        label="Titulo"
                        variant="outlined"
                        value={newJob.title}
                        onChange={(e) => handleFormNowJob(e)}
                    />

                    <TextField
                        name='description'
                        label="Descripcion"
                        variant="outlined"
                        value={newJob.description}
                        onChange={(e) => handleFormNowJob(e)}
                        multiline
                        rows={5}
                    />

                    <input type="file" onChange={(e) => handleFormNowJob(e)} name="image" placeholder='Sube una imagen' accept='.jpg, .jpeg, .png, .webp'/>
                    <input
                        type='date'
                        name='deadline'
                        value={newJob.deadline}
                        onChange={(e) => handleFormNowJob(e)}
                    />
                    <Typography variant='h3'>Requerimientos</Typography>
                    <TextField  
                        type='text'
                        name='experience'
                        label="Experiencia"
                        variant="outlined"
                        value={requirements.experience}
                        onChange={(e) => handleFormRequirements(e)}
                    />
                    <TextField
                        type='text'
                        name='education'
                        label="Educacion"
                        variant="outlined"
                        value={requirements.education}
                        onChange={(e) => handleFormRequirements(e)}
                    />
                    <TextField
                        type='text'
                        name='skills'
                        label="Habilidades"
                        variant="outlined"
                        value={requirements.skills}
                        onChange={(e) => handleFormRequirements(e)}
                    />

                </Box>
                <Box sx={{ display: 'grid', rowGap: '1rem', width:'100%' }}>
                    <Typography variant='h3' mb={ 1 }>Datos del trabajo  </Typography>

                    <TextField
                        type='number'
                        name='salary'
                        label="Salario"
                        variant="outlined"
                        value={newJob.salary}
                        onChange={(e) => handleFormNowJob(e)}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Tipo de trabajo</InputLabel>
                        <Select
                            value={newJob.type}
                            label="Tipo de trabajo"
                            name='type'
                            onChange={(e) => setNewJob({ ...newJob, type: e.target.value } as any)}
                        >
                            <MenuItem value='Remoto'>Remoto</MenuItem>
                            <MenuItem value='Presencial'>Presencial</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Horario de trabajo</InputLabel>
                        <Select
                            value={newJob.workingHour}
                            label="Horario de trabajo"
                            name='workingHour'
                            onChange={(e) => setNewJob({ ...newJob, workingHour: e.target.value } as any)}
                        >
                            <MenuItem value='Tiempo Completo'>Tiempo Completo</MenuItem>
                            <MenuItem value='Medio Tiempo'>Medio Tiempo</MenuItem>
                            <MenuItem value='Turno'>Turno</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        type='text'
                        name='location'
                        label="Ubicacion"
                        variant="outlined"
                        value={newJob.location}
                        onChange={(e) => handleFormNowJob(e)}
                    />
                    <Typography variant='h3' mb={0}>Beneficios</Typography>
                    <Typography mb={ 1 }>Escribe y presiona Enter para agregar</Typography>
                    <Box display='flex' gap='.5rem'>
                        {
                            benefits.map((benefitItem, index) => 
                            <Typography sx={{ p:1, bgcolor:'rgba(0,0,0,0.1)', borderRadius:'1rem' }} key={ index }>{ benefitItem }</Typography>
                            )
                        }
                    </Box>
                    <TextField
                        type='text'
                        label="Agregar beneficio"
                        variant="outlined"
                        value={benefit}
                        onKeyUp={(e) =>{
                            if( e.key != 'Enter' ){
                                return;
                            } 
                            handleFormBenefits() 
                        }}
                        onChange={(e) => setBenefit( e.target.value ) }
                    />
                </Box>
            </Box>


            <Button type='submit' onClick={handleSubmit}>Subir</Button>
        </Box>
    )
}
