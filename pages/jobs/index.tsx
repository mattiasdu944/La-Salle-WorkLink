import React from 'react'

import { MainLayout } from '@/layouts'
import { BannerJob } from '@/components'

const JobsPage = () => {
    return (
        <MainLayout title={'Worklink | Empleos'} description={'Encuentras las mejores oportunidades laborales en WorkLink La Salle'}>
            <BannerJob/>
            
        </MainLayout>   
    )
}
export default JobsPage;