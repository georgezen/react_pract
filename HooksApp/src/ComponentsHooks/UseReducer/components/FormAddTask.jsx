import { useState } from "react";

const generarIdUnico = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const FormAddTask = ({ onAddTask}) => {
    const [form, setForm] = useState({
        id: generarIdUnico(),
        task: '',
        done: false

    });

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            task: target.value
        });
        console.log(target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        onAddTask(form);
        console.log(form);
        setForm({
            id: generarIdUnico(),
            task: '',
            done: false
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="" className='mt-1 mb-1'>Agregar tarea</label>
                <input type="text" name="addTask" className='form-control mt-1 mb-1' id="addTask" value={form.task} onChange={handleChange} />
                <button type="submit" className='btn btn-primary mt-2'>Agregar</button>
            </form>

        </>
    )
}

export default FormAddTask
