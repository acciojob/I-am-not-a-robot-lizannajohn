//your code here
let lastimg = document.getElementsByTagName("img")[5];
let reset = document.getElementById("reset")
let verify = document.getElementById("verify")
let para = document.getElementById("para")

let imgClass = ["img1", "img2", "img3", "img4", "img5"]
let randomImg = Math.floor(Math.random() * imgClass.length);

lastimg.className = imgClass[randomImg]

let countImg = 0

function selectImg(i)
{
    let tile = document.getElementsByTagName("img")[i]

    tile.classList.add("selected")
    countImg++;
    reset.style.display = 'inline-block'

    if(countImg == 2)
    {
        verify.style.display = 'inline-block'
    }
    else
    {
        verify.style.display = 'none'
    }
}

reset.onclick = function ()
{
    let tile0 = document.getElementsByTagName("img")[0]
    tile0.classList.remove("selected")

    let tile1 = document.getElementsByTagName("img")[1]
    tile1.classList.remove("selected")

    let tile2 = document.getElementsByTagName("img")[2]
    tile2.classList.remove("selected")

    let tile3 = document.getElementsByTagName("img")[3]
    tile3.classList.remove("selected")

    let tile4 = document.getElementsByTagName("img")[4]
    tile4.classList.remove("selected")

    let tile5 = document.getElementsByTagName("img")[5]
    tile5.classList.remove("selected")

    countImg = 0
    reset.style.display = 'none'
    para.innerText = ""
    verify.style.display = 'none'
}

verify.onclick = function ()
{
    let chk1 = document.getElementsByClassName("selected")[0]
    let chk2 = document.getElementsByClassName("selected")[1]

    if(chk1.className == chk2.className)
    {
        para.innerText = "You are a human. Congratulations!"
    }
    else
    {
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }
}