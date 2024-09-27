
document.getElementById('create_note').addEventListener('click', (e) => {
    e.preventDefault() // prevent from to refresh the page make smoother experience!!!!
    let load_cards = new Promise((resolve, reject) => {
        let title = document.getElementById('title').value
        let note = document.getElementById('note').value
        // let tag = document.getElementById('card_notes')
        // let card = ""
        if (title.length == 0) {
            alert('Please write the title of your new note')
        }
        else if (title.length != 0) {

            localStorage.setItem(title, note)
        }

        let tag = document.getElementById('card_notes')

        for (let i = 0; i < localStorage.length; i++) {
            let card = `<div class="card mx-2 my-4" style="width: 16rem;">
                        <img src="https://source.unsplash.com/1980x1080/?notes" class="card-img-top" alt="notes">
                        <div class="card-body">
                            <h5 class="card-title">${localStorage.key(i)}</h5>
                            <p class="card-text">${localStorage[localStorage.key(i)]}</p>
                        </div>
                    </div>`
            tag.insertAdjacentHTML("afterbegin", card)
        }
    })
})


document.getElementById('del_note').addEventListener('click', (e)=>{
    // e.preventDefault()
    localStorage.removeItem(localStorage.key(localStorage.length - 1))
    location.replace(location.href)
    let tag = document.getElementById('card_notes')

    for (let i = 0; i < localStorage.length; i++) {
        let card = `<div class="card mx-2 my-4" style="width: 16rem;">
                    <img src="https://source.unsplash.com/1980x1080/?notes" class="card-img-top" alt="notes">
                    <div class="card-body">
                        <h5 class="card-title">${localStorage.key(i)}</h5>
                        <p class="card-text">${localStorage[localStorage.key(i)]}</p>
                    </div>
                </div>`
        tag.insertAdjacentHTML("afterbegin", card)
    }

})

document.getElementById('clear_note').addEventListener('click', (e)=>{
    // e.preventDefault()
    localStorage.clear()
    location.replace(location.href)

})


document.getElementById('mode_btn').addEventListener('click', (e)=>{
    document.body.classList.toggle('theme')
})


document.getElementById('btn_note').addEventListener('click', (e)=>{
    e.preventDefault()
    // location.replace(history.back)
    document.getElementById('compitition_link').classList.toggle('active')
    document.getElementById('create_note').classList.toggle('active')
})




const fetch_url = () => {

    let url = 'https://kontests.net/api/v1/all'
    let result = fetch(url)
    result.then((value) => {
        return value.json()
    }).then((r) => {
        console.log(r)
        for (let data of r) {
            // console.log(data.name)
            let card = `<div class="card my-4 mx-2" style="width: 18rem;">
                            <img src="https://source.unsplash.com/1980x1080/?coding" class="card-img-top" alt="compitition">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">
                                    PLATFORM:${data.site}
                                    TYPE:${data.status}
                                    START TIME:${data.start_time}
                                    END TIME:${data.end_time}
                                </p>
                                <a href=${data.url} class="btn btn-primary">join link</a>
                            </div>
                        </div>`
            document.body.children[1].insertAdjacentHTML("afterbegin", card)
            // location.replace("http://127.0.0.1:5500/index.html#")
        }
    })
    document.getElementById('compitition_link').classList.toggle('active')
    document.getElementById('create_note').classList.toggle('active')

}

document.getElementById('compitition_link').addEventListener('click', (e)=>{
    // e.preventDefault()
    fetch_url()
})

