
const number1 = 0;


fetch('GET https://www.thecolorapi.com/')
    .then(res =>{

        return res.json()
    }  )
    .then(data => console.log(data))
