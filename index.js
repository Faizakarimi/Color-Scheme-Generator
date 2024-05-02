
const colorContainer = document.getElementById('colors-container')
const colorPicker = document.getElementById('color-picker')
const colorModeList = document.getElementById('colorsMenu')
let defaultColor = colorPicker.value.substring(1)

let mode = ''
let r = ''
let g = ''
let b = ''
// colorMode.options[colorMode.selectedIndex].text
console.log(defaultColor)


colorModeList.addEventListener('change', (e) => {
    mode = e.target.options[colorModeList.selectedIndex].text.toLowerCase()
    console.log(mode)
})
colorPicker.addEventListener('change', function (e) {
    defaultColor = e.target.value.substring(1);
    r = parseInt(defaultColor.substr(1, 2), 16)
    g = parseInt(defaultColor.substr(3, 2), 16)
    b = parseInt(defaultColor.substr(5, 2), 16)
    console.log(defaultColor)
    // console.log('e:' + color)
    console.log(`${r} +${g} +${b}`)
})




function getColorScheme() {
    // console.log(defaultColor)
    let html = ``
    fetch(`https://www.thecolorapi.com/scheme?hex=${defaultColor}&rgb=&{r},&{g},&{b}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const colorsArray = data.colors
            console.log(colorsArray)
            colorsArray.map(color => {
                colorContainer.innerHTML += ` <div class="color-image"><img src = ${color.image.bare}> 
            <p class="color-value" data-color = ${color.hex.value}>${color.hex.value}</p></div>`

            })

        })
    colorContainer.innerHTML = ''


}

document.getElementById('get-btn').addEventListener('click', getColorScheme)
// colorContainer.innerHTML = getColorScheme()

document.addEventListener('click', function (e) {
     if(!navigator.clipboard){
        console.log('error')
     }
    else if(e.target.dataset.color) {
        Navigator.clipboard.writeText(e.target.dataset.color)
        alert(`e.target.dataset.color copied to clipboard`)
        console.log(e.target.dataset.color)
    }

})



