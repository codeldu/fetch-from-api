const countryname = new URLSearchParams(window.location.search).get('countryName')

console.log(countryname);

fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
.then(res=>res.json())
.then(element => {
    console.log(element);

    document.body.innerHTML=` <div class="card">
    <div class="flag" >
    <img src="${element[0].flags.png}" alt="flag">
         </div>
      <div class="info">
          <p>Name : ${element[0].name.common}</p>
            <p>Capital :  ${element[0].capital?.[0]}</p>
           <p>Population : ${element[0].population}</p>
         </div>
           </div>`

})