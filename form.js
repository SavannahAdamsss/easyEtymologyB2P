const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
        let input = document.getElementById('input');
            input.value = '';
            console.log(input);

    fetch(`https://ety-api.now.sh/word/${formData.get('wordInput')}`)
        .then(function(response){
            
        return response.json();
        })
        .then(function(response){
            // console.log(response)
    
        const resultDiv = document.getElementsByClassName('ety')[0];
            const title = textContent word 
            title



            
        });
});



// const url = 'http://api.wordnik.com:80/v4/word.json/word/etymologies?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

// fetch(url);
//     .then(response => response.json())
//     .then(json => {
        
//     });

// console.log(json);

// function parseJson(response) {
//     return response.json();
// }

// function logResult(result) {
//     const children = result.data.children;
// }

// children.forEach(child) => {
//     const li = document.createElement('li');
//     li.textContent = child.data.title;
//     list.appendChild(li);
// }

// function load() {
//     fetch("http://api.wordnik.com:80/v4/word.json/word/etymologies?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");
//         .then(response => console.log(response.json));
// }

// const data = {
//     message
// };

// sendMessage(data);
// }

// function sendMessage(data) {
//     const url = 'http://api.wordnik.com:80/v4/word.json/word/etymologies?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
//     const body = JSON.stringify(data);
//     fetch(url, {
//         method: 'POST',
//         body,
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(parseJson)
//         .then(showResponse);
// }

// function parseJson(response) {
//     return response.json();
// }

// function showResponse(response) {
//     return response.json();
// }
