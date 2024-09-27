const accesskey="MGX_x8x7fxvnuR73-Vgkdw4q9E7mR0_HXpVY_1TurjI"
const formE1=document.querySelector('form')

const inputE1=document.getElementById("input_text")
const searchresults=document.querySelector('.search-results')
const showmore=document.getElementById('show_more_btn')


let input_data=""

let page=1

async function api_fetch()
{
    input_data=inputE1.value
    const URL=`https://api.unsplash.com/search/photos?page=${page}&query=${input_data}&client_id=${accesskey}`
    const response=await fetch(URL)
    const data=await response.json()
    const results=data.results

    if(page===1)
    {
        searchresults.innerHTML=""
    }

    if(input_data.toString().length==0 || results.length==0)
    {
        const msg_wrapper=document.createElement('div')
        msg_wrapper.insertAdjacentText('afterbegin',"OOPS!... ,No Keywords Found!")
        searchresults.insertAdjacentElement('afterbegin',msg_wrapper)
        showmore.style.display='none'
    }

    else{
        
        results.map((result)=>
        {
            const image_wrapper=document.createElement('div')
            image_wrapper.classList.add('search-result')
            
            const image=document.createElement('img')
            image.src=result.urls.regular
            image.alt=result.alt_description

            const anchor_wrapper=document.createElement('div')
            anchor_wrapper.classList.add('anchor')

            const anchor_link=document.createElement('a')
            anchor_link.href=result.links.html
            anchor_link.target="_blank"
            anchor_link.textContent=result.alt_description

            anchor_wrapper.appendChild(anchor_link)

            image_wrapper.appendChild(image)
            image_wrapper.appendChild(anchor_wrapper)
            
            searchresults.appendChild(image_wrapper)
    
        })
        page++

        if(results.length>1)
        {
            if(page>1)
            {
                showmore.style.display="block"
            }
        }
        else if(results.length==1)
        {
            showmore.style.display="none"
        }
    

    }

    

}

formE1.addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1;
    api_fetch()
})

showmore.addEventListener('click',(e)=>{
    api_fetch()
})