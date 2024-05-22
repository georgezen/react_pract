

const customFigonachi = (valor) => {


  let num1 = 0;
  let num2 = 1;
  let total = 0;

    for(let i = 0;i < valor; i++){

        total = num1 + num2;
        num1 = num2;
        num2 = total;
        console.log('iteraccion '+ (i+1) + ' ' + total);
    }

  

  return {
    total
  }
}

export default customFigonachi
