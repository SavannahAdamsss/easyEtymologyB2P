var inputWord = '';
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let resultWord = document.getElementsByClassName('ety')[0];
    resultWord.innerHTML = '';

    const formData = new FormData(form);
        let input = document.getElementById('input');
            input.value = '';
    console.log(input.value);

    fetch(`https://ety-api.now.sh/word/${formData.get('wordInput')}`)
        .then(function(response){
            
        return response.json();
        }).then(function(response){
            buildEty(response);
        }).catch(function(response) {
            console.log("fucked");
        });


        function buildEty(response) {
            let resultWord = document.getElementsByClassName('ety')[0];
            let word = document.createElement('p');
            word.innerHTML = response.word;
            resultWord.appendChild(word);

            const resultEty = document.getElementsByClassName('ety')[0];
            let ety = document.createElement('p');
            ety.textContent = response.ety;
            resultEty.appendChild(ety);
        }


        let url = `https://word-to-mp3-api.herokuapp.com/${formData.get('wordInput')}`;
        fetch(url)
            .then(function(response) {
                    
                return response.json();
                })
                .then(function(data) {
                    console.log(data.mp3Url);
                    getAudio(data);
                });

});

function getAudio(data) {
    let soundLink = data.mp3Url;
    let soundHolder = document.querySelector('.sound-holder');
    let soundItem =         
    `<audio auto id="sound">
     <source id="audio" src="${soundLink}" type="audio/mpeg">
            Your browser does not support the audio element.
    </audio>
    <a onclick="document.getElementById('sound').play()">
      <img src="speaking-ico.png">
    </a>
    `;
    console.log(soundItem, "soundItem with link???");
    soundHolder.innerHTML = soundItem;

}

