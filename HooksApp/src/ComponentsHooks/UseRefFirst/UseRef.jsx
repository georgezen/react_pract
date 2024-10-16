import  { useRef } from 'react';

const UseRef = () => {

    const inputRef = useRef();

    console.log(inputRef);

    const clicaso = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>use ref</h1> 

        <input 
        ref={inputRef}
        type="text" 
        name="" 
        id="" 
        className='form-control'
        />

        <button type="button" className='btn btn-success' onClick={ clicaso}>Click</button>
    </>
  )
}

export default UseRef
