interface Patient {
    idDocFirebase: string,
    email: string,
    name: string,
    telefono: string,
    ultimoRegistro: string,
}

export const mockData: Patient[] = [
    {
        idDocFirebase: 'joel@mail.com',
        email: 'joel@mail.com',
        name: 'Joel',
        telefono: '8126111945',
        ultimoRegistro: 'Feb 27',
    },
    {
        idDocFirebase: 'diego@mail.com',
        email: 'diego@mail.com',
        name: 'Diego',
        telefono: '8126311945',
        ultimoRegistro: 'Feb 24',
    },
    {
        idDocFirebase: 'manu@mail.com',
        email: 'manu@mail.com',
        name: 'Manu',telefono: '8186111945',
        ultimoRegistro: 'Abr 01',

    },
    {
        idDocFirebase: 'mario@mail.com',
        email: 'mario@mail.com',
        name: 'Mario',
        telefono: '8126611945',
        ultimoRegistro: 'Dic 21',
    },
]