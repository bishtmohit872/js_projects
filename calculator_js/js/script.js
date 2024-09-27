(function () {
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let equal = document.querySelector('.btn-equal')
    let clear = document.querySelector('.btn-clear_one')
    let clear_all=document.querySelector(".btn-clear_all")

    
    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num
            screen.value = screen.value + value
        })
    })

    equal.addEventListener('click', function (e) {
        if (screen.value == "") {
            screen.value = "";
        }
        else {
            screen.value=eval(screen.value);
        }
    })

    clear.addEventListener('click', function (e) {
        let values=Array.from(screen.value)
        values.pop()
        values=values.join("")
        screen.value=values   
    })

    clear_all.addEventListener('click',function(e){
        screen.value=""
    })


})();