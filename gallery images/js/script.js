(function(){
    const buttons=document.querySelectorAll(".btn")
    const storeImages=document.querySelectorAll('.store-item')
    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter
            // console.log(filter)

            storeImages.forEach((item)=>{
                if(filter==='all')
                {
                    item.style.display='inline'
                }
                else
                {
                    if(item.classList.contains(filter))
                    {
                        item.style.display='inline'
                    }
                    else{
                        item.style.display="none"
                    }
                }
            })
        })
    })
})();