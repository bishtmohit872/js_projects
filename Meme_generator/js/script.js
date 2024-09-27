const generate_meme_btn=document.querySelector(".meme-generator .generate-meme-btn");
const meme_Image=document.querySelector('.meme-generator img');
const meme_Title=document.querySelector('.meme-generator .meme-title');
const meme_Author=document.querySelector('.meme-generator .meme-author');


function update_data ({title,url,author})
{
    meme_Image.setAttribute('src',url);
    meme_Title.innerHTML=title
    meme_Author.innerHTML=author
}

// console.log(meme_Image)
const generate_Meme=()=>{
    const meme=fetch('https://meme-api.com/gimme/wholesomememes')
    meme.then((response)=>{
        // console.log(response.json())
        return response.json()
    }).then((data)=>{
        update_data(data)//functin calling here!
    })
}



generate_meme_btn.addEventListener('click',generate_Meme);


