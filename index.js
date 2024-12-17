const keys = document.querySelectorAll('.piano-keys');

// Creating a object of Audio with a default sound
const pianoSound = new Audio('https://files.catbox.moe/436mqk.wav');

keys.forEach((key) =&gt; {
    key.addEventListener('click', (e) =&gt; {
        const clickedKey = e.target.dataset.list;
        pianoSound.src = `https://files.catbox.moe/436mqk.wav`;
        pianoSound.play();
    })
})
