import { useEffect, useState } from "react"

const UseEffectWithCustomHook = () => {
    const [form, setForm] = useState({
        nombre: 'jorge',
        apellido: 'garcia'
    });

    const { nombre, apellido } = form;

    const getChange = ({target}) => {
        const {name, value} = target;
        console.log(name, value);
        setForm({
            ...form,
            [name]: value
        });
    }

    useEffect(() => {
        //console.log('useEffect');
    },[]);

    useEffect(() => {
        //console.log('disparo del form');
    },[form]);

    useEffect(() => {
        //console.log('disparo del campo nombre');
    },[nombre]);

    return (
        <>
            <h1>useEfect</h1>
            <div className="row">
                <div className="col-4">

                    <label htmlFor="">Nombre</label>
                    <input type="text" name="nombre" id="nombre" className="form-control" value={nombre} onChange={getChange}/>
                </div>

                <div className="col-4">

                    <label htmlFor="">Apellido</label>
                    <input type="text" name="apellido" id="apellido" className="form-control" value={apellido} onChange={getChange}/>
                </div>

            </div>
        </>
    )
}

export default UseEffectWithCustomHook
