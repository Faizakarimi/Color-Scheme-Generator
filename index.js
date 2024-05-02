
const colorContainer = document.getElementById('colors-container')
const colorPicker = document.getElementById('color-picker')
const colorModeList = document.getElementById('colorsMenu')
let defaultColor = colorPicker.value.substring(1)
let Chosencolor
let mode = ''
let r = ''
let g = ''
let b = ''
// colorMode.options[colorMode.selectedIndex].text
console.log(defaultColor)

function getDefaultColorScheme() {
    console.log(defaultColor)
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
}

getDefaultColorScheme()

colorModeList.addEventListener('change', (e) => {
    mode = e.target.options[colorModeList.selectedIndex].text.toLowerCase()
    // console.log(mode)
})
colorPicker.addEventListener('change', function (e) {
    Chosencolor = e.target.value.substring(1);
    r = parseInt(Chosencolor.substr(1, 2), 16)
    g = parseInt(Chosencolor.substr(3, 2), 16)
    b = parseInt(Chosencolor.substr(5, 2), 16)
    // console.log(defaultColor)
    // console.log('e:' + color)
    // console.log(`${r} +${g} +${b}`)
})




function getColorScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${Chosencolor}&rgb=&{r},&{g},&{b}&mode=${mode}`)
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

document.addEventListener('click', function (e) {
    if (e.target.dataset.color) {
        Navigator.clipboard.writeText(e.target.dataset.color)
        alert(`e.target.dataset.color copied to clipboard`)
        // console.log(e.target.dataset.color)
    }

})



