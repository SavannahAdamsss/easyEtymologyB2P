const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
        let input = document.getElementById('input');
            input.value = '';

    fetch(`https://ety-api.now.sh/word/${formData.get('wordInput')}`)
        .then(function(response){
            
        return response.json();
        })
        .then(function(response){
            console.log(response);

        let soundIcon = `
        <audio auto id="sound">
        <source id="audio" src="" type="audio/mpeg">
                Your browser does not support the audio element.
        </audio>
        <a onclick="document.getElementById('sound').play()">
          <img src="speaking-ico.png">
        </a>
        `;
    
        let resultWord = document.getElementsByClassName('ety')[0];
            resultWord.innerHTML = null;
            let word = document.createElement('p');
            word.innerHTML = response.word + soundIcon;
            resultWord.appendChild(word);

        const resultEty = document.getElementsByClassName('ety')[0];
            let ety = document.createElement('p');
            ety.textContent = response.ety;
            resultEty.appendChild(ety);

            // dom manipulate url of sound
            let mp3 = "http://jmh-sounds.surge.sh/pussy_gb_1.mp3";
            document.getElementById("audio").src = mp3;
            
        });
});

// const url = 'https://api.oxforddictionaries.com/api/v1/entries/en/'
// let searchString = 'word'

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "method": "GET",
//   'mode': 'no-cors',
//   "headers": {
//     "Host": 'od-api.oxforddictionaries.com',
//     "Accept": 'application/json',
//     "app_id": 'fb405eb4',
//     "app_key": 'bad3a11b2954277c3a08ddbbaaec4216',
//   }
// }

// fetch(url + searchString, settings)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       return data.results.lexicalEntries.pronunciations.audioFile
//     });


// to add IPA word after little man, write an if statement saying if 'key' = true something something something