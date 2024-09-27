// document.querySelector('#result').innerHTML='Result Will Appear Here'


function btnClicking() {
    document.querySelector('#enc-btn').addEventListener('click', function () {
        document.querySelector('#encryption').style.display = "flex"
        document.querySelector('#decryption').style.display = "none"

        document.querySelector('#enc-btn').style.background = "rgba(255, 255, 255, 0.26)"
        document.querySelector('#dec-btn').style.background = "none"

        document.querySelector('#main>h1 span img').style.transform = "rotate(360deg)"
        document.getElementById('result').style.display = 'none'
        document.querySelector('#txtmsg').value = ''
        document.querySelector('#password').value = ''
        document.querySelector('#result').value = ''

    })

    document.querySelector('#dec-btn').addEventListener('click', function () {
        document.querySelector('#decryption').style.display = "flex"
        document.querySelector('#encryption').style.display = "none"

        document.querySelector('#enc-btn').style.background = "none"
        document.querySelector('#dec-btn').style.background = "rgba(255, 255, 255, 0.26)"

        document.querySelector('#main>h1 span img').style.transform = "rotate(180deg)"
        document.querySelector('#result').style.display = 'none'
        document.querySelector('#emojimsg').value = ''
        document.querySelector('#final_password').value = ''
        document.querySelector('#result').value = ''
    })
}

btnClicking()

//////////////////////////////////////////////////////////////////////////////////////////////
// global variables for functions

let clutter = ""
let data_index = 1

/////////////////////////////////////////////////////////////////////////////////////


function encryption() {
    document.getElementById('encrypt-btn').addEventListener('click', function () {
        let text = document.getElementById('txtmsg').value
        const str = text.split("")

        str.forEach(word => {
            clutter += `&#128${word.charCodeAt()}`   //this is emoji character encoding!
        })


        let password = document.getElementById('password').value
        document.getElementById('result').style.display = 'block'
        document.getElementById('result').innerHTML = clutter
        const data = { 'password': password, 'clutter': clutter, 'text': text }
        localStorage.setItem(`key${data_index}`, JSON.stringify(data))
        data_index = data_index + 1
    })
}
encryption()



function decryption() {
    document.getElementById('decrypt-btn').addEventListener('click', function () {
        let verify_clutter = ""
        const result = document.querySelector('#result')
        const verify_password = document.querySelector('#final_password').value

        let emojitext = document.getElementById('emojimsg').value
        emojitext = Array.from(emojitext)
        emojitext.forEach(emoji => {
            verify_clutter += `&#${emoji.codePointAt(0)}` //this is emoji decoding part
        })


        //traversing in local storage to check the encoded emoji value for fetching out the text!
        for (let index = 1; index <= localStorage.length; index++) {
            data_object = localStorage.getItem(`key${index}`)
            const { password, clutter, text } = JSON.parse(data_object)

            if (verify_password == password) {
                console.log('password matched')
                result.style.display = 'block'
                if (verify_clutter == clutter) {
                    result.innerHTML = text
                    break
                }
                else if (verify_clutter != clutter) {
                    
                    result.innerHTML = "Sorry, No Encryption Found !"
                }
            }
            else {
                // result.style.display = 'none'
            }

        }
        // let load_data=JSON.parse(localStorage.getItem(text))

        // document.querySelector('#result').innerHTML=clutter
    })
}
decryption()

