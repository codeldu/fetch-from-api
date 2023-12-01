{/* <div class="card">
<div class="flag">

</div>
<div class="info">
    <p>Name</p>
    <p>Capital</p>
    <p>Population</p>
</div>
</div> */}

let wrapper = document.querySelector('.mainWrapper');

// const getCountriesData = function () {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => {

//             data.forEach(element => {



//                 wrapper.innerHTML += `
//                 <div class="card">
//                <div class="flag">
//                <img src="${element.flags.png}" alt="flag">
//                     </div>
//                  <div class="info">
//                      <p>Name : ${element.name.common}</p>
//                        <p>Capital :  ${element.capital?.[0]}</p>
//                       <p>Population : ${element.population}</p>
//                     </div>
//                       </div>`
//             });
//         })
// }

// getCountriesData()

const getCountryByName = function (name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let [myData] = data;

            wrapper.innerHTML += `
            <div class="card">
               <div class="flag">
               <img src="${myData.flags?.png}" alt="flag">
                    </div> <div class="info">
                     <p>Name : ${myData.name.common}</p>
                        <p>Capital :  ${myData.capital?.[0]}</p>
                       <p>Population : ${myData.population}</p>
                     </div>
                       </div>
            `
        })
}

getCountryByName('az');
getCountryByName('turkey');
getCountryByName('germany')
getCountryByName('china')