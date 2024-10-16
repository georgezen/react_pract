import { useEffect, useState } from 'react';

const useFetch = (contactoId) => {

    const [contactoData, setContactoData] = useState({
        nombre: '',
        telefono: '',
        correo: ''
    });
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJKdWFuIiwiaWF0IjoxNzIyMDM4ODMzLCJleHAiOjE3MjIwNDI0MzN9.Zmvdl0eiJdxnrLSAbuBSOf9-1cQlfrXRB1SP1rw7O9o';

    useEffect(() => {
        if (!contactoId) return;
        getContacto(contactoId);
    }, [contactoId]);

    const getContacto = async (id) => {
        if (id) {
            const data = await fetchContacto(id, token);

            if (data) {
                setContactoData(data);
            }

        } else {
            initContacto();
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
