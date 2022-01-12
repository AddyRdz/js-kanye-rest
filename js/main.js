console.log("👀")

let url = "https://api.kanye.rest"

const options = {
    method: 'GET',
    headers: {}
}

fetch(url,options).then((resp)=>{
        console.log(resp)
        resp.json().then((data)=>{
            // console.log("quote",data)
            console.log(data.quote)
            const kanyeQuotes = data.quote

            document.getElementById("sayings").innerText = kanyeQuotes
        })

})

function newQuote(){
    return location.reload()
}

const stuffKanyeSays =document.querySelector(".stuffKanyeSays")
console.log(stuffKanyeSays)
stuffKanyeSays.addEventListener("click",newQuote)

 // console.log(kanyeQuotes)