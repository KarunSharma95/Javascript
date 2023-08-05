'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderError(msg){
    countriesContainer.insertAdjacentText('beforeend',`Something went wrong 🎆🎆🎆 ${msg}. Try again !`);
    // countriesContainer.style.opacity=1;

}

// let x = function (name1){
// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${name1}`);
// request.send();
// request.addEventListener('load',function(){
//     const data = JSON.parse(this.responseText);
//     console.log(data)
//     const html =`
//     <article class="country">
//           <img class="country__img" src="${data[1].flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data[1].name.common}</h3>
//             <h4 class="country__region">${data[1].capital}</h4>
//             <p class="country__row"><span>👫</span>${(Number(data[1].population) / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data[1].languages.hin}</p>
//             <p class="country__row"><span>${data[1].currencies.INR.symbol}</span>${data[1].currencies.INR.name}</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity='1';
// });
// };
// x('india');

const renderCountry= function (data1){
    const html =`
    <article class="country">
          <img class="country__img" src="${data1.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data1.name.common}</h3>
            <h4 class="country__region">${data1.capital}</h4>
            <p class="country__row"><span>👫</span>${(Number(data1.population) / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data1.languages.hin}</p>
            <p class="country__row"><span>${data1.currencies.INR.symbol}</span>${data1.currencies.INR.name}</p>

          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    // countriesContainer.style.opacity='1';
}
/*
let x = function (name1){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${name1}`);
request.send();
request.addEventListener('load',function(){
    const data = JSON.parse(this.responseText);
   const data1=data[1]
    console.log(data1);
    const html =`
    <article class="country">
          <img class="country__img" src="${data1.flags.png}" />
          <div class="country__data">
           <h3 class="country__name">${data1.name.common}</h3>
            <h4 class="country__region">${data1.capital}</h4>
            <p class="country__row"><span>👫</span>${(Number(data1.population) / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data1.languages.hin}</p>
             <p class="country__row"><span>${data1.currencies.INR.symbol}</span>${data1.currencies.INR.name}</p>
           </div>
         </article>
   `;
     countriesContainer.insertAdjacentHTML('beforeend',html);
     countriesContainer.style.opacity='1';
    
   
//  renderCountry(data1);

//Neighbour Country
const neighbourCountry = data1.borders[5];
console.log(neighbourCountry);
request.open('GET',`https://restcountries.com/v3.1/alpha/${neighbourCountry}`)
request.send();
request.addEventListener('load',function(){
    const [neigh] = JSON.parse(this.responseText);
    console.log(neigh);
    // renderCountry(neigh);
    
    const html =`
     <article class="country neighbour">
           <img class="country__img" src="${neigh.flags.png}" />
           <div class="country__data">
             <h3 class="country__name">${neigh.name.common}</h3>
             <h4 class="country__region">${neigh.capital}</h4>
             <p class="country__row"><span>👫</span>${(Number(neigh.population) / 1000000).toFixed(1)}</p>
             <p class="country__row"><span>🗣️</span>${neigh.languages.urd}</p>
             <p class="country__row"><span>${neigh.currencies.PKR.symbol}</span>${neigh.currencies.PKR.name}</p>
           </div>
         </article>
     `;
     countriesContainer.insertAdjacentHTML('beforeend',html);
   countriesContainer.style.opacity='1';
})    
});
};
x('india');
*/

function getCountry (country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response=>response.json())
    .then(data=>renderCountry(data[1]))
    .catch(err =>renderError(err.message))
    .finally(function(){
        countriesContainer.style.opacity='1';
    })
};

btn.addEventListener('click',function(){
    getCountry('india');
});