const myForm = document.querySelector("#my-form");
const word = document.querySelector("#word")
const msg = document.querySelector("#msg")

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()

    wd = word.value

    if(word.value === '') {
        msg.innerHTML = 'You need to enter a word';

        setTimeout(() => msg.remove(), 3000);

    } else {
        for(let letter of wd.split('')) {

            if(window.speechSynthesis.getVoices().length == 0) {
                window.speechSynthesis.addEventListener('voiceschanged', function() {
                    textToSpeech();
                });
            }
            else {
                // languages list available, no need to wait
                textToSpeech()
            }

            function textToSpeech() {
                // get all voices that browser offers
                let available_voices = window.speechSynthesis.getVoices();

                // this will hold an english voice
                let english_voice = '';

                // find voice by language locale "en-US"
                // if not then select the first voice
                for(let i=0; i<available_voices.length; i++) {
                    if(available_voices[i].lang === 'en-US') {
                        english_voice = available_voices[i];
                        break;
                    }
                }
                if(english_voice === '')
                    english_voice = available_voices[0];

                // new SpeechSynthesisUtterance object
                let utter = new SpeechSynthesisUtterance();
                utter.rate = 1;
                utter.pitch = 0.5;
                utter.text = letter;
                utter.voice = english_voice;

                // speak
                window.speechSynthesis.speak(utter);
            }
            }
        if(window.speechSynthesis.getVoices().length == 0) {
            window.speechSynthesis.addEventListener('voiceschanged', function() {
                    textToSpeech();
                });
            }
        else {
            textToSpeech()
            }

        function textToSpeech() {
            // get all voices that browser offers
            let available_voices = window.speechSynthesis.getVoices();

            // this will hold an english voice
            let english_voice = '';

            // find voice by language locale "en-US"
            // if not then select the first voice
            for(let i=0; i<available_voices.length; i++) {
                if(available_voices[i].lang === 'en-US') {
                    english_voice = available_voices[i];
                    break;
                }
            }
            if(english_voice === '')
                english_voice = available_voices[0];

                // new SpeechSynthesisUtterance object
                let utter = new SpeechSynthesisUtterance();
                utter.rate = 1;
                utter.pitch = 0.5;
                utter.text = wd;
                utter.voice = english_voice;

                // speak
                window.speechSynthesis.speak(utter);
            }
    }
}
