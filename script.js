const celcius = document.querySelector('.cel')
const faren = document.querySelector('.far')
const kelvin = document.querySelector('.kel')

const inputs = document.querySelectorAll('.input')

for (let i = 0; i < inputs.length; i++){
    let input = inputs[i]

    input.addEventListener('input',(e)=>{
        let value = parseFloat(e.target.value);

        switch(e.target.name){
            case'celcius':
            faren.value = (value * 1.8) + 32;
            kelvin.value = value + 273.15;
            break;
            case'frenhight':
            celcius.value = (value - 32) /1.8;
            kelvin.value = ((value - 32) /1.8) + 273.15;
            break;
            case'kelvin':
            celcius.value = value - 273.15;
            faren.value = ((value - 273.15) * 1.8) + 32;
            break;
        }
    })
}