import { useEffect, useState } from 'react';

const useFetch = (contactoId = 116) => {
    
    const [contactoData, setContactoData] = useState({
        nombre: '',
        telefono: '',
        correo: ''
    });
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJKdWFuIiwiaWF0IjoxNzIxODkzMDQwLCJleHAiOjE3MjE4OTY2NDB9.v7rglYnaz4ibCqUMXGFdMgWS6LpQnEsY7_oICUY22_8';
    

    useEffect(() => {
        if (!contactoId) return;
        getContacto(contactoId);
    },[contactoId]);
    



    const getContacto = async (id) => {
        if (id) {
            const data = await fetchContacto(id, token);
            console.log(data);

            if (data) {
                setContactoData(data);
            }
            
            /*const {nombre, telefono, correo} = data;
            setContactoData({
                nombre,
                telefono,
                correo
            });*/
        } else {
            setContactoData({
                nombre:'',
                telefono:'',
                correo:''
            });
        }
    }

    const fetchContacto = async (id, token) => {
        try {
            initContacto();
            const response = await fetch(`http://localhost:3000/api/contacto/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (!response.ok) {
                throw new Error('Algun error');
            }
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const initContacto = () => {
        setContactoData({
            nombre: '',
            telefono: '',
            correo: ''
        });
    }



  return {
    contactoData

  }
}

export default useFetch
