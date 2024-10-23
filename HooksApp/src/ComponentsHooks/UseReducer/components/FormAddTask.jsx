import { useState,useEffect } from "react";

const FormAddTask = ({onAddTask}) => {
    const [form, setForm] = useState({
            id: 3,
            task: '',
            done: false
        
    });

    const handleChange = ({target}) => {
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
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className='mt-1 mb-1'>Agregar tarea</label>
                <input type="text" name="addTask" className='form-control mt-1 mb-1' id="addTask" value={form.task} onChange={handleChange} />
                <button type="submit" className='btn btn-primary mt-2'>Agregar</button>
            </form>

        </>
    )
}

export default FormAddTask
