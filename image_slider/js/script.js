(function (){
    const pictures=[
        'img1',
        'img2',
        'img3',
        'img4',
    ]

    const buttons=document.querySelectorAll(".btn")
    const imgDiv=document.querySelector('.img-container')

    let counter = 0
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if(button.classList.contains('btn-left')){
                counter--
                if(counter<0){
                    counter=pictures.length-1
                }
                imgDiv.style.backgroundImage=`url('images/${pictures[counter]}.jpg')`
            }
            if(button.classList.contains('btn-right')){
                counter++
                if(counter>pictures.length-1){
                    counter=0
                }
                imgDiv.style.backgroundImage=`url('/images/${pictures[counter]}.jpg')`
            }
        })
    })


})();