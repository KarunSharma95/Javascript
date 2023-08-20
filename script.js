'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderError(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
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
    .catch(err =>renderError(`Something went wrong 🎆🎆🎆 ${err.message}. Try again !`))
    .finally(function(){
        countriesContainer.style.opacity='1';
    })
};

btn.addEventListener('click',function(){
    getCountry('india');
});

// Creating Promise

const getPosition = function (){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve,reject);
  })
}
getPosition().then(res => console.log(res));

const  wait = function(seconds){
  return new Promise(function(resolve,reject){
     setTimeout(resolve,seconds * 1000);
  })

}

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
  return new Promise(function(resolve,reject){
    const img = document.createElement('img');
    img.src=imgPath;

    img.addEventListener('load',function(){
      imgContainer.append(img);
      resolve(img);
    })

    img.addEventListener('error',function(){
      reject (new Error('Image not found'));
    })
  })
}
// let currImage;
//  createImage('img/img-1.jpg')
//  .then(res => {
//   currImage = res;
//   console.log('1 st Image loaded successfully');
//   return wait(2);
// })
// .then(()=>{
//   currImage.style.display='none';
//   return createImage('img/img-2.jpg')
// })
// .then(res => {
//   currImage = res;
//   console.log('2 nd Image loaded successfully');
//   return wait(2)
// })
// .then(()=>{
//   currImage.style.display='none';
// })
//  .catch(err => console.error('Image not found'))

//Coding Challenge no 3

  const loadNPause = async function(){
    try {
    //Load image 1
    let img = await createImage ('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait (2);
    img.style.display = 'none';

    img = await createImage ('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait (2);
    img.style.display = 'none';

    }catch(err){
    console.error(err)
    }
  }
  // loadNPause();

  // PART 2
  const loadAll =async function(imgArr){
    try{
       const imgs = imgArr.map(
        async img => await createImage(img));
        console.log(imgs); 

        const imgEl = await Promise.all (imgs);
        console.log(imgEl);
        imgEl.forEach(img => img.classlist.add('parallel'));
    }catch(err){
      console.error(err);
    }
  };
  loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']); 