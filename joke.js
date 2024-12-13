let  jokecontainer= document.querySelector(".joke")
let  btn= document.querySelector(".btn")
let url ='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getjoke=()=>{
    fetch(url)
    .then(data=> data.json())
    .then(item=>{
        jokecontainer.innerHTML=`
             <h5 class="joke">
           ${item.joke}
        </h5>

        `
    });
}

btn.addEventListener('click', getjoke);

