const text = "Authentizität bezeichnet eine kritische Qualität von Wahrnehmungsinhalten (Gegenständen oder Menschen, Ereignissen oder menschlichem Handeln), die den Gegensatz von Schein und Sein als Möglichkeit zu Täuschung und Fälschung voraussetzt. Als authentisch gilt ein solcher Inhalt, wenn beide Aspekte der Wahrnehmung, unmittelbarer Schein und eigentliches Sein, in Übereinstimmung befunden werden. Die Scheidung des Authentischen vom vermeintlich Echten oder Gefälschten kann als spezifisch menschliche Form der Welt- und Selbsterkenntnis gelten."

const container = document.getElementById("container")

const listOfWords = text.split(" ")

const anticipatedWordWidth  = 200

console.log(listOfWords);

listOfWords.forEach(word => {

    console.log(word)
    const wordElement = document.createElement("span")

    const scaleValueX = Math.random ()
    const scaleValueY = Math.random ()

    wordElement.style.transform = `scaleX(${scaleValueX}) scaleY(${scaleValueY})`

    const wghtRange = 1000 - 100;
    const wghtValue = Math.random() * wghtRange +100;

     const wdthRange = 151 - 25;
    const wdthValue = Math.random() * wdthRange +25

//min.100 mx:1000 = range= 900
//min.25, max:151, range: 151-25 = 126

//"wght"200, "wdth" 125


   const fontVariationSettings = `"wght" ${wghtValue}, "wdth" ${wdthValue}`

    wordElement.style.fontVariationSettings = fontVariationSettings

    wordElement.innerHTML = word

    const wordWidth = wordElement.getBoundingClientRect().width




    const scaleX = anticipatedWordWidth / wordWidth 

    const degree = Math.random()* 80
    const skew = Math.random() * 25

    wordElement.style.transform = `scaleX(${scaleX}) rotate(${degree}deg)`
    wordElement.style.transform = `scale(0.8) skew(${skew}deg, 0deg)`


    //wordElement.style.transform = `skew(${40deg, 20deg}) rotate(${0.2turn}`

   // WebTransportDatagramDuplexStream.style.width = `${wordWidth * scale}px`
















//

    wordElement.style.fontSize = 100 * Math.random () + "px"

    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255

   const background = `rgb(${g},${b},${r})`
   const color = `rgb(${r},${g},${b})`

 wordElement.style.background = background
wordElement.style.color = color

    wordElement.innerHTML = word + " "

    container.appendChild(wordElement)



})