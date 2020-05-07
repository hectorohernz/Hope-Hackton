let api =  `http://localhost:3000/resources/api/foodbank`;
const container = document.getElementById('food');
fetch(api)
    .then(response => {
        return response.json();
    }).then( data => {
    for(var i = 0; i < data.length; i++){
         const content = data[i]
         const address = content.address.freeformAddress
         const header = content.poi.name ;
         const phone = content.poi.phone;
         const points = data[i].position       
                
         const divEl = document.createElement('div');
         const headerEl = document.createElement('h3');
         const infoEl = document.createElement('p');
         const streetEl = document.createElement('p');
        

         headerEl.innerText = header;
         infoEl.innerText = phone;
         streetEl.innerText = address;
                
         divEl.appendChild(headerEl);
         divEl.appendChild(infoEl);
         divEl.appendChild(streetEl);
                
         container.appendChild(divEl);
    };
    }).catch(error => {
    console.log(error);
})
