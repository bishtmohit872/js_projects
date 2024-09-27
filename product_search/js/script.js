const search = () => {
    const searchbox = document.getElementById('search-item').value.toLowerCase()
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll('.product')
    const productname = storeitems.getElementsByTagName('h2')
    // console.log(typeof searchbox)
    // console.log(product)
    // console.log(product[5].getElementsByTagName('h2')[0])
    // console.log(product[0].getElementsByTagName('h2')[1])
    
    // for (let i = 0; i < productname.length; i++) {
    //     let match = product[i].getElementsByTagName('h2')[0];
    //     if (match) {
    //         let textvalue = match.textContent || match.innerHTML
    //         if (textvalue.toLowerCase().indexOf(searchbox) >= 0) {
    //             product[i].style.display = "";
    //         }
    //         else if( (textvalue.toLowerCase().indexOf(searchbox) < 0)) {
    //             product[i].style.display = "none";
    //         }
    //     }

    // }

    for (let i = 0; i < productname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toLowerCase().search(searchbox)>=0) {
                product[i].style.display = "";
            }
            else if((textvalue.toLowerCase().search(searchbox))<0) {
                product[i].style.display = "none";
            }
        }

    }
}