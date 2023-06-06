import bcrypt from 'bcrypt';
export const initialCompanies = {
    companies: [
        {
            name: 'Samsung Bolivia',
            email: 'soporte@samgung.com',
            description : 'Samsung Electronics es una empresa multinacional electrónica y de tecnologías de punta de la información con sede en Samsung Town, Seúl, Corea del Sur. Es la principal subsidiaria del Grupo Samsung. Con plantas de ensamble y redes de venta en 65 países',
            location    : 'La Paz - Bolivia',
            phone       : '77766321',
            
            website     : 'www.samsung.com.bos', 
            password    :  bcrypt.hashSync('123123123', 10),
            token       : '',
        
            username    : 'samsung_bo',
            image       : 'https://media.licdn.com/dms/image/C4D0BAQGBZ01Ui5Kh2Q/company-logo_200_200/0/1674582891713?e=1694044800&v=beta&t=7mUWy0-WHw9UbEX3n86O49D2CXrwvjPMRQl1wdS8xs4',
            banner      : 'https://media.licdn.com/dms/image/C511BAQFQBO107sUQAg/company-background_10000/0/1562827604955?e=1686535200&v=beta&t=v2vvn3WMIEb2_glpk47aV4-Nmf2-JSXM6wVz2RbrTxU'
        },
        {
            name: 'Huawei Technologies Bolivia',
            email: 'soporte@huawei.com',
            description : 'Fundado en 1987, Huawei es un proveedor líder mundial de infraestructuras de tecnologías de la información y la comunicación (TIC) y de dispositivos inteligentes. Estamos comprometidos a llevar la digitalización a cada persona, hogar y organización para un mundo totalmente conectado e inteligente.',
            location    : 'La Paz - Bolivia',
            phone       : '77766321',
            
            website     : 'www.huawei.com', 
            password    :  bcrypt.hashSync('123123123', 10),
            token       : '',
        
            username    : 'huawei_bo',
            image       : 'https://media.licdn.com/dms/image/C4E0BAQFzmdL6i2dnBQ/company-logo_200_200/0/1630549290219?e=1694044800&v=beta&t=-9iGQNTqrmBFo4_nuCZ0JuizPttl59uM_VBDzltEUJE',
            banner      : 'https://media.licdn.com/dms/image/C4E1BAQEo8abkVimgQA/company-background_10000/0/1630549537678?e=1686535200&v=beta&t=P188DpGOYMJZp0EbRi62wCRItokXuXHjh9weSdZXM70'
        },
        {
            name: 'Tigo Bolivia',
            email: 'soporte@tigo.com',
            description : 'Telefónica Celular de Bolivia S.A. (Telecel S.A.) es una filial del grupo empresarial Millicom, proveedor líder de servicios de cable y móviles dedicado a mercados emergentes en América Latina. Nuestra misión es construir autopistas digitales, que conectan personas, mejoran vidas y desarrollan nuestras comunidades.',
            location    : 'La Paz - Bolivia',
            phone       : '77766321',
            
            website     : 'www.tigo.com', 
            password    :  bcrypt.hashSync('123123123', 10),
            token       : '',
        
            username    : 'tigo_bo',
            image       : 'https://media.licdn.com/dms/image/C4E0BAQE9wwHnVM9N3w/company-logo_200_200/0/1593705355140?e=1694044800&v=beta&t=O91eq0nhh13gsFa322c_xvTv_Y6q8evXTF9XFJMLDCM',
            banner      : 'https://media.licdn.com/dms/image/C4E3DAQG-1Vvh3YHVKw/image-scale_191_1128/0/1680525043791?e=1686535200&v=beta&t=R77A3CEpvBA9kgJ6bpNgdayEUeVx_q1dF1-AxNk5g2E'
        },
        {
            name: 'Cervecería Boliviana Nacional',
            email: 'soporte@tigo.com',
            description : 'Nuestro propósito: “Soñamos En Grande, Para Crear Un Futuro Con Más Motivos Para Brindar”.',
            location    : 'La Paz - Bolivia',
            phone       : '77766321',
            
            website     : 'www.cbn.bo', 
            password    :  bcrypt.hashSync('123123123', 10),
            token       : '',
        
            username    : 'cbn',
            image       : 'https://media.licdn.com/dms/image/D4E0BAQGvsp8Krewwbg/company-logo_200_200/0/1665412814201?e=1694044800&v=beta&t=hQVPATeIvV_RVfWypSY5EHviOmkOjRbruULcAxfOJCE',
            banner      : 'https://media.licdn.com/dms/image/D4E3DAQHeDTPfDA5k_w/image-scale_191_1128/0/1665413808932?e=1686535200&v=beta&t=pAtK8t1vYFpPLTJ4tD0LllJvvbUkBwAKBY5ygPEXp38'
        },

    ]
}