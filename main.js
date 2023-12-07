{/* <div class="card">
<div class="flag">

</div>
<div class="info">
    <p>Name</p>
    <p>Capital</p>
    <p>Population</p>
</div>
</div> */}

// let wrapper = document.querySelector('.mainWrapper');
// let sendButton = document.querySelector('.send');

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

// const getCountryByName = function (name) {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);

//             let [myData] = data;

//             wrapper.innerHTML += `
//             <div class="card">
//                <div class="flag">
//                <img src="${myData.flags?.png}" alt="flag">
//                     </div> <div class="info">
//                      <p>Name : ${myData.name.common}</p>
//                         <p>Capital :  ${myData.capital?.[0]}</p>
//                        <p>Population : ${myData.population}</p>
//                      </div>
//                        </div>
//             `
//         })
// }

// getCountryByName('az');
// getCountryByName('turkey');
// getCountryByName('germany')
// getCountryByName('china')


// METHODS : GET , POST , PUT (PATCH), DELETE


// let goods = {
//     id : 2,
//     name : "Mehsullar",
//     price : 5
// }


// {
//     id : 2,
//     name : "Aaa"
// }
// https://northwind.vercel.app/api/suppliers

// let sendData = (id) => {

//         fetch('https://northwind.vercel.app/api/suppliers/'+id, {
//             method: "DELETE", // *GET, POST, PUT, DELETE, etc.
//             headers: {
//             "Content-Type": "application/json",
//             },
//             // body: JSON.stringify(
//             //     { companyName : "Code Academy-test",
//             //     contactName : "LDU-test",
//             //     contactTitle : "Technest-test"}
//             // )
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(err => err)
// }



// let sendInfo =  async () =>{

//     let response = await fetch('https://northwind.vercel.app/api/suppliers/')


//                 let data = await response.json();

//                 // console.log(data);

//                 return data;
//     }


//     (async ()=>{
//         let mee = await sendInfo();
//         console.log(mee);
//     })();




// sendButton.addEventListener('click', sendInfo);


// console.log(myVariable);

// const sendByAxios = () => {

//     axios.get('https://northwind.vercel.app/api/suppliers/').then(response => console.log(response.status))

// } 


// let myForm = document.querySelector('#myForm');



// const sendByFetch = (e) => {

//     // e.preventDefault();

//     let companyName = document.querySelector('#companyName').value;
//     let contactName = document.querySelector('#contactName').value;
//     let contactTitle = document.querySelector('#contactTitle').value;


//     if ( companyName && contactName && contactTitle){
//     let myBody = {
//         companyName : companyName,
//         contactName : contactName,
//         contactTitle : contactTitle
//     }

//     fetch('https://northwind.vercel.app/api/suppliers/', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(myBody)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     }else{
//        alert('Xanalari doldur')
//     }



// }

// myForm.addEventListener('submit', sendByFetch);





////////////////////////////////////////////////////////

const wrapper = document.querySelector('.mainWrapper');
const inputEl = document.querySelector('#searchBar');
const selectEl = document.querySelector('#region');


function goTo(url) {
    window.location = `./info.html?countryName=${url}`
}

const getCountriesData = function () {

    wrapper.innerHTML = '<img src="./load.gif" alt="load"/>';

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {

            wrapper.innerHTML = '';

            data.forEach(element => {



                wrapper.innerHTML += `
            <div class="card" onclick='goTo("${element.name.common}")'>
               <div class="flag" >
               <img src="${element.flags.png}" alt="flag">
                    </div>
                 <div class="info">
                     <p>Name : ${element.name.common}</p>
                       <p>Capital :  ${element.capital?.[0]}</p>
                      <p>Population : ${element.population}</p>
                    </div>
                      </div>`
            });
        })
}

const getByName = (name) => {

    wrapper.innerHTML = '<img src="./load.gif" alt="load"/>'

    axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
            if (res.status == 200) {

                let countryInfo = res.data;



                wrapper.innerHTML = ''

                countryInfo.forEach((country) => {
                    wrapper.innerHTML += `
            <div class="card" onclick='goTo("${country.name.common}")'>
            <div class="flag">
            <img src="${country.flags.png}" alt="flag">
                 </div>
              <div class="info">
                  <p>Name : ${country.name.common}</p>
                    <p>Capital :  ${country.capital?.[0]}</p>
                   <p>Population : ${country.population}</p>
                 </div>
                   </div>`

                })
            }
        })
        .catch(err => {
            wrapper.innerHTML = 'Country Not Found';
        })


}

const getByRegion = (region) => {

    wrapper.innerHTML = '<img src="./load.gif" alt="load"/>'

    fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => res.json())
        .then(data => {

            wrapper.innerHTML = '';
            data.forEach(element => {

                wrapper.innerHTML +=
                `
            <div class="card" onclick='goTo("${element.name.common}")'>
            <div class="flag">
            <img src="${element.flags.png}" alt="flag">
                 </div>
              <div class="info">
                  <p>Name : ${element?.name.common}</p>
                    <p>Capital :  ${element.capital?.[0]}</p>
                   <p>Population : ${element.population}</p>
                 </div>
                   </div>`
            });

        }
        )
    }



getCountriesData();

inputEl.addEventListener('input', (e) => {
    if (e.target.value === '') {
        getCountriesData();
    } else {
        getByName(e.target.value)
    }
})

selectEl.addEventListener('change', (e) => {
    let region = e.target.value;

    if (region == 'all') {
        getCountriesData()
    } else {
        getByRegion(region);
    }
})
