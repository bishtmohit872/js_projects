const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjQwMmMxZTEzYWY1MTEzOTljMTk1YjczNzBjYjNlYiIsInN1YiI6IjY1MTZiZWM4OWI4NjE2MDBhY2FlYzEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._MmLN0OUqXbvur6R8BFBUARyJlxzjCinh0R3gj8YMxI'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then((response) => {
        const data = Object.values(response)[1]

        console.log(data)
        let card=""
        data.map((value) => {
            console.log(value.title)
            card=card+ `<div class="card">
                <img src="https://image.tmdb.org/t/p/original/${value.backdrop_path}" alt="">
                <div id="details">
                    <div id="title">
                        <p id="title-content">${value.title}</p>
                    </div>
                    <button id="watch-now">Watch Now</button>
                </div>
            </div>`
        })
        document.querySelector(".collection").innerHTML=card
    }
    )
    .catch(err => console.error(err));

gsap.from("#intro h1,h4",{
    opacity:0,
    duration:3
})

gsap.from(".card",{
    transform:'translateY(30px)',
    duration:1,
    opacity:0
})
gsap.to(".card #title #title-content",{
    x:-100,
    duration:4,
    repeat:-1
})








