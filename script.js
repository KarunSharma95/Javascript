'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

let x = function (name1){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${name1}`);
request.send();
request.addEventListener('load',function(){
    const data = JSON.parse(this.responseText);
    console.log(data)
    const html =`
    <article class="country">
          <img class="country__img" src="${data[1].flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data[1].name.common}</h3>
            <h4 class="country__region">${data[1].capital}</h4>
            <p class="country__row"><span>👫</span>${(Number(data[1].population) / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data[1].languages.hin}</p>
            <p class="country__row"><span>${data[1].currencies.INR.symbol}</span>${data[1].currencies.INR.name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity='1';
});
};
x('india');
// x('portugal');