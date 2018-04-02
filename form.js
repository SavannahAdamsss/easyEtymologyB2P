const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let resultWord = document.getElementsByClassName('ety')[0];
    resultWord.innerHTML = '';

    let input = document.getElementById('input');
    let userInput = input.value;
    console.log(userInput, "word day entered");
    
    fetchWordData();
    fetchAudioData();


    function fetchWordData() {
        let input = document.querySelector("#input");
        let userInput = input.value;
        let url = "https://ety-api.now.sh/word/" + userInput;
        fetch(url)
            .then(function(response){  
                return response.json();
            }).then(function(response){
                buildEty(response);
            }).catch(function(response) {
                console.log("fucked");
            });
    }

    function fetchAudioData() {
        let input = document.querySelector("#input");
        let userInput = input.value;
        let url = "https://word-to-mp3-api.herokuapp.com/" + userInput;
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data.mp3Url);
                getAudio(data);
            });
    }

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

});

