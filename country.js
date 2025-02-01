const searchBtn = document.querySelector("#search-btn");
const countryInp = document.querySelector("#country-input");
let countryName = "";


searchBtn.addEventListener("click", () => {
//   console.log("button is clicked")
//   let countryName = "pakistan";
  let countryName = countryInp.values;
  let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  console.log(apiURL);

  fetch(apiURL)
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].continents[0]);
      console.log(data[0].name.common);
      console.log(data[0].name.nativeName.eng.official);
      console.log(data[0].currencies.PKR.name);
      console.log(data[0].population);
      console.log(data[0].borders);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );

      result.innerHTML = `
            <img src = "${data[0].flags.svg}" class = "flag-img"/>

            
            <h2>${data[0].name.common}</h2>
            <div class = "wrapper">
                <div class = "data-wrapper>
                <h4>"</h4>Capital : 
                <span>${data[0].capital[0]}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper>
                 <h4>"</h4>Continent : 
                <span>${data[0].continents[0]}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper>
             <h4>"</h4>Official Name : 
                <span>${data[0].name.nativeName.eng.official}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper>
             <h4>"</h4>Currecy : 
                <span>${data[0].currencies.PKR.name}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper>
             <h4></h4>Currecy : 
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(",")}</span>
                
                </div>
            </div>

             <div class = "wrapper">
                <div class = "data-wrapper>
             <h4>"</h4>Population : 
                <span>${data[0].population}</span>
                </div>
            </div>

             <div class = "wrapper">
                <div class = "data-wrapper>
             <h4>"</h4>Borders shared with : 
                <span>${data[0].borders}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class = "data-wrapper>
             <h4>"</h4>Common Languages : 
                <span>${data[0].name.common}</span>
                </div>
            </div>

       
     
            `;
    });
});
