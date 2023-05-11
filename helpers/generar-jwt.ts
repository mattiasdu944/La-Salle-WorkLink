import jwt from "jsonwebtoken";


export const generarJWT = ( uid = '' ): Promise<string> => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, process.env.NEXT_PUBLIC_SECRET!, {
            expiresIn: '7d'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token! );
            }
        })

    })
}