const shelter__button = document.querySelector('.shelter-container');
const getStart__button = document.querySelector('.get-started-container');
const foodbank__button = document.querySelector('.food-bank-container');
const mental__button = document.querySelector('.mental-health-container');
const clothing__button = document.querySelector('.clothing-container');
const other__button  = document.querySelector('.other-container');


const btnEl = document.querySelectorAll('.object-container');

function displayContent(dataEl){
    for(var i = 0; i < btnEl.length; i++){
        let el = btnEl[i];
        let typeEl = el.getAttribute("data-btn");
        if(dataEl == typeEl || !dataEl){
            el.classList.add('active-container');
        } else{
            el.classList.remove('active-container');
        }
    };
};
function activeBtn(btn, keyword,urlKey,conEl){
    btn.addEventListener('click',() => {
        displayContent(keyword);
         const container = document.getElementById(conEl); 
        let API = `http://localhost:3000/resources/${urlKey}`;
        fetch(API)
            .then(response => {
                return response.json();
            }).then(data => {
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
                }
            }).catch(error => {
                console.log(error);
            })
    });
};
activeBtn(getStart__button,'get started');
activeBtn(shelter__button,'shelter','shelter','shelterContainer');
activeBtn(foodbank__button,'food banks');
activeBtn(mental__button, "mental health");
activeBtn(clothing__button,'clothing');
activeBtn(other__button,'other');

/* shelter__button.addEventListener('click', () => {
    let shelter_API = `http://localhost:3000/resources/shelter`;
    const ShelterContainer = document.getElementById('shelterContainer');
    fetch(shelter_API)
        .then(response => {
            return response.json();
        }).then( data => {
            for(var i = 0; i < data.length; i++){
                const address = data[i].address
                const info = data[i].poi
                const points = data[i].position
                console.log(address);
                const divEl = document.createElement('div');
                const headerEl = document.createElement('h3');
                const infoEl = document.createElement('p');
                const streeEl = document.createElement('p');

                
            };
        }).catch(error => {
            console.log(error);
        })
});
 */
