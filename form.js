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
    
        const resultWord = document.getElementsByClassName('ety')[0];
            let word = document.createElement('p');
            word.textContent = response.word;
            resultWord.appendChild(word);

        const resultEty = document.getElementsByClassName('ety')[0];
            let ety = document.createElement('p');
            ety.textContent = response.ety;
            resultEty.appendChild(ety);

            // $(document).ready(function(){
            //     $('.scrollspy').scrollSpy();
            //   });
        });
});
