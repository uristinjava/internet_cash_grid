'use strict';

document.addEventListener('DOMContentLoaded', (loader) => {
    const checkEl = document.querySelector('.press_snd_text_yes');
    const yeasEl = document.querySelector('.check');

    checkEl.addEventListener('click', (event) => {
        yeasEl.classList.toggle('hidden');
    });
})

