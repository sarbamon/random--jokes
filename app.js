const button = document.querySelector('.container button');
const joketext = document.querySelector('.container ');

button.addEventListener('click', getjoke);

async function getjoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers: { 
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    joketext.innerHTML = jokeObj.joke;
}