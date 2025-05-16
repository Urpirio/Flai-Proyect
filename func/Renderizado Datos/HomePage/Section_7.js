import { Data_First_Part, Data_Second_Part,Data_Three_Part } from "../../../Data - Home/Data_Section_7.js"

(()=>{

    Data_First_Part.forEach(Data => {

        document.querySelector('.Part-Card-1').innerHTML += `
            <article>
                    <div class="Second-Part">
                        <span>Testimonio</span>
                    </div>
                    <div class="First-Part">
                        <div class="Div1">
                            <img src="${Data.Img}" alt="${Data.name}">
                        </div>
                        <div class="Div2">
                            <!-- Estrellas -->
                            <span id = "${Data.name + '_Start'}">
                                
                            </span>
                            <h1>${Data.name}</h1>
                            <p>${Data.Comment}</p>
                        </div>
                    </div>
                   
                </article>
        
        `;

         for(let x = 0; x < Data.Star; x++){
            document.getElementById(`${Data.name + '_Start'}`).innerHTML += `
                <i class='bx bxs-star' ></i>
            `;
        }
    })
})();


(()=>{

    Data_Second_Part.forEach(Data => {

        document.querySelector('.Part-Card-2').innerHTML += `
            <article>
                    <div class="Second-Part">
                        <span>Testimonio</span>
                    </div>
                    <div class="First-Part">
                        <div class="Div1">
                            <img src="${Data.Img}" alt="${Data.name}">
                        </div>
                        <div class="Div2">
                            <span id = "${Data.name + '_Start'}">
                                
                            </span>
                            <h1>${Data.name}</h1>
                            <p>${Data.Comment}</p>
                        </div>
                    </div>
                </article>
        
        `;

         for(let x = 0; x < Data.Star; x++){
            document.getElementById(`${Data.name + '_Start'}`).innerHTML += `
                <i class='bx bxs-star' ></i>
            `;
        };
    })
})();

(()=>{
    Data_Three_Part.forEach(Data => {
        document.querySelector('.Part-Card-3').innerHTML += `
            <article>
                    <div class="Second-Part">
                        <span>Testimonio</span>
                    </div>
                    <div class="First-Part">
                        <div class="Div1">
                            <img src="${Data.Img}" alt="${Data.name}">
                        </div>
                        <div class="Div2">
                            <!-- Estrellas -->
                            <span id = "${Data.name + '_Start'}">
                                
                            </span>
                            <h1>${Data.name}</h1>
                            <p>${Data.Comment}</p>
                        </div>
                    </div>
                </article>
        
        `;
        for(let x = 0; x < Data.Star; x++){
            document.getElementById(`${Data.name + '_Start'}`).innerHTML += `
                <i class='bx bxs-star' ></i>
            `;
        }
    });

    
})();