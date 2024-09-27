
setInterval(() => {
    let new_date = new Date()
    const date1 = new_date.toLocaleString('en-US', { hour12: true, }).split(",")
    document.getElementById('end_date').innerText = date1
    document.getElementById('day').value = new_date.getDay()//fetching the day out of week!
    document.getElementById('hour').value = new_date.getHours()
    document.getElementById('minute').value = new_date.getMinutes()
    document.getElementById('second').value = new_date.getSeconds()
}, 1000)