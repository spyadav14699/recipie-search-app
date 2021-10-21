async function getData(url) {

    let res = await fetch (url) 
    let data = await res.json() 

    return data 
}
 
function append(data, container) {

    data.forEach(({title, description, image}) => {


        let div = document.createElement('div')
        let H = document.createElement('H')
        let p = document.createElement('p') 

        H.innerText = title

        p.innerText = description

        let img = document.createElement("img")

        img.src = image

        div.append(img, H, p)

        container.append(div)
        
    });

}

export {getData, append}