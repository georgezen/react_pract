import { Field } from 'formik';

export const CompField = ({ prop_type,
    prop_id,
    prop_name,
    prop_values,
    prop_handleChange }) => {
    return (
        <>
            <Field type={prop_type} id={prop_id} name={prop_name} values={prop_values} onChange={prop_handleChange} className='input' />
        </>
    )
}
