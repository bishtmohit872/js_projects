(function (){
    const customer_image=document.querySelector('#customer-img')
    const customer_name=document.querySelector('#customer-name')
    const customer_text=document.querySelector('#customer-text')


    const btn=document.querySelectorAll('.btn')
    let index=0
    const customers=[]

    function Customer(img,name,text)
    {
        this.img=img
        this.name=name
        this.text=text
        console.log(this.img)
        console.log(this.name)
        console.log(this.text)
    }

    function create_customer(image,name,text)
    {
        let img=`/img/${image}.jpg`
        let customer=new Customer(img,name,text)
        customers.push(Customer)
    }

   

    create_customer("profile1",'Simi','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni assumenda a quae repellendus laboriosam, perferendis molestiae, exercitationem nam ea dicta excepturi dolor blanditiis enim velit, minus nisi quisquam?')
    
    create_customer("profile2",'Kaira','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni assumenda a quae repellendus laboriosam, perferendis molestiae, exercitationem nam ea dicta excepturi dolor blanditiis enim velit, minus nisi quisquam?')
    
    create_customer("profile3",'john','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni assumenda a quae repellendus laboriosam, perferendis molestiae, exercitationem nam ea dicta excepturi dolor blanditiis enim velit, minus nisi quisquam?')
    
    create_customer("profile4",'Mike','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni assumenda a quae repellendus laboriosam, perferendis molestiae, exercitationem nam ea dicta excepturi dolor blanditiis enim velit, minus nisi quisquam?')
    
    create_customer("profile5",'David','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni assumenda a quae repellendus laboriosam, perferendis molestiae, exercitationem nam ea dicta excepturi dolor blanditiis enim velit, minus nisi quisquam?')


    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('prevBtn'))
            {
                if(index==0)
                {
                    index=customers.length
                }
                index--
                customer_image.src=customers[index].img
                customer_name.textContent=customers[index].name
                customer_text.textContent=customers[index].text
            }
            
            if(e.target.parentElement.classList.contains('nextBtn'))
            {
                if(index==customers.length)
                {
                    index=0
                }
                index++
                customer_image.src=customers[index].img
                customer_name.textContent=customers[index].name
                customer_text.textContent=customers[index].text

            }
        })
    })
})();