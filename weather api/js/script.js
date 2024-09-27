//operation after fetching the link
// https://cdn.weatherapi.com/weather/64x64/night/143.png

async function report(location)
{
    let response=await fetch(`http://api.weatherapi.com/v1/current.json?key=c78f32c79d8c43eab50110755243101&q=${location}`)
    let data=await response.json()
    console.log(data)
    console.log(data.current.condition)
    
    image.src=`https:${data.current.condition.icon}`
    
    location_name.innerText=data.location.country

    celcius.innerText=`${data.current.feelslike_c}`
    fahrenheit.innerText=`${data.current.feelslike_f}`
    kph.innerText=`${data.current.gust_kph}`
    mph.innerText=`${data.current.gust_mph}`
    humidity.innerText=`${data.current.humidity}`
    last_update.innerText=`${data.current.last_updated}`
    wind_kph.innerText=`${data.current.wind_kph}`
    wind_mph.innerText=`${data.current.wind_mph}`
}
     


// following are the variable list, before link fetch
let visible=true

let cursor=document.getElementById("cursor")
let main_div=document.getElementById("main")

let box=document.getElementById("box")
let intro=document.querySelector("#box #intro")
let options=document.querySelector("#box #options")
let part1=document.getElementById("part1")
let menu_tag=document.querySelectorAll("#part1 #menus")
let menus=document.querySelectorAll("#part1 #menus .menu")

let initial_deg=-70
let report_btn=document.getElementById("btn")

//following  are variable use after link feth


let image=document.getElementById("weather_image")
let location_name=document.querySelector("#info #top #left #location_name")

let info=document.getElementById("#part1 #info")

let celcius=document.getElementById("celcius")
let fahrenheit=document.getElementById("Fahrenheit")
let kph=document.getElementById("kph")
let mph=document.getElementById("mph")
let humidity=document.getElementById("Humidity")
let last_update=document.getElementById("Last_update")
let wind_kph=document.getElementById("wind_kph")
let wind_mph=document.getElementById("wind_mph")



//operation before fetching the link
report_btn.addEventListener("click",()=>{
    console.log("hello")
    if(visible)
    {
        part1.style.paddingLeft="0px";

        intro.style.display="None"
        options.style.display="flex"
        
        box.style.height="50%"
        box.style.width="12%"

        box.style.borderTopLeftRadius="0px"
        box.style.borderBottomLeftRadius="0px"
        
        box.style.borderTopRightRadius="390px"
        box.style.borderBottomRightRadius="390px"
        
        box.style.boxShadow="0px 0px 40px rgb(255,255,255)"
        
        menus.forEach((value)=>{
            value.style.transform=`rotate(${initial_deg}deg)`
            initial_deg=initial_deg+28
        })

        report_btn.style.height="10%"
        report_btn.style.width="40%"
        report_btn.innerText="Back"

        gsap.to("#part1 #menus .menu button",{
            // delay:0.2,
            opacity:1,
            duration:1,
            stagger:0.1,
        })

        gsap.to("#part1 #info",{
            display:"flex",
            transform:"rotateY(1)",
            height:"95%",
            opacity:1,
            duration:0.4,
        })

        report("India")

        visible=false

        console.log("folding......")
    }
    else if(!visible)
    {
        part1.style.paddingLeft="10px";

        box.style.height="60%"
        box.style.width="30%"
        box.style.borderTopRightRadius="0px"
        box.style.borderBottomRightRadius="0px"
        box.style.boxShadow="0px 0px 0px rgb(255,255,255)"
        
        intro.style.display="flex"
        options.style.display="none"

        // info.style.display="none"
        gsap.to("#part1 #info",{
            display:"none",
            transform:"rotateY(0)",
            opacity:0,
            duration:0.4,
        })
        
        menus.forEach((value)=>{
            value.style.transform="rotate(0deg)"

        })
        
        initial_deg=-70

        report_btn.innerText="Weather Report"
        
        visible=true

        console.log("unfolding......")
    }

})








