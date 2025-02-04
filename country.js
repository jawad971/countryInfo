const searchBtn = document.querySelector("#search-btn");
const countryInp = document.querySelector("#country-input");
let countryName = "";


searchBtn.addEventListener("click", () => {
//   console.log("button is clicked")
//   let countryName = "pakistan";
  let countryName = countryInp.value;
  let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  console.log(apiURL);

  fetch(apiURL)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].continents[0]);
      console.log(data[0].name.common);
    //   console.log(data[0].name);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      
    //   console.log(data[0].population);
    console.log(data[0].continents[0]);
    
      console.log(data[0].borders);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );

      result.innerHTML = `
            <img src = "${data[0].flags.svg}" class = "flag-img"/>

            
            <h2>${data[0].name.common}</h2>
            <div class = "wrapper">
                <div class = "data-wrapper">
                <h4>Capital :</h4>  
                <span>${data[0].capital[0]}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper">
                 <h4>Continent :</h4>  
                <span>${data[0].continents[0]}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper">
             <h4>Official Name :</h4>  
                <span>${data[0].name.common}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper">
             <h4>Currency</h4> : 
                <span>${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>

          

             <div class = "wrapper">
                <div class = "data-wrapper">
             <h4>>Population</h4> : 
                <span>${data[0].population}</span>
                </div>
            </div>

             <div class = "wrapper">
                <div class = "data-wrapper">
             <h4>Borders shared with</h4> : 
                <span>${data[0].borders}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper">
             <h4>Common Language</h4> : 
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(",")}</span>
                
                </div>
            </div>

       
     
            `;
    });
});
