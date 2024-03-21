import {  FieldArray } from 'formik';

export const CompFieldArray = ({name,onRender}) => {
    return (
        <>
            <FieldArray
                name={name}
                render={onRender}
            />
        </>
    )
}


