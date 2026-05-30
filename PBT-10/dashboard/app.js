const widgets = [
    document.getElementById("widget1"),
    document.getElementById("widget2"),
    document.getElementById("widget3")
];

const loadTime =
    document.getElementById("loadTime");

function renderWidget(index,data){

    if(index===0){

        widgets[index].innerHTML = `
            <h3>Weather</h3>
            <p>
                Temperature:
                ${data.current_weather.temperature}°C
            </p>
            <p>
                Wind:
                ${data.current_weather.windspeed}
            </p>
        `;
    }

    if(index===1){

        widgets[index].innerHTML = `
            <h3>Country</h3>
            <p>Name: ${data[0].name.common}</p>
            <p>Capital: ${data[0].capital}</p>
            <p>Population:
                ${data[0].population}
            </p>
        `;
    }

    if(index===2){

        widgets[index].innerHTML = `
            <h3>Random Dog</h3>
            <img src="${data.message}">
        `;
    }
}

function renderWidgetError(index,message){

    widgets[index].innerHTML = `
        <h3>Error</h3>
        <p>${message}</p>
    `;
}

async function loadDashboard(){

    const startTime = Date.now();

    widgets.forEach(widget => {

        widget.innerHTML =
            "Loading...";
    });

    const results =
        await Promise.allSettled([

            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true"
            ).then(r=>r.json()),

            fetch(
                "https://restcountries.com/v3.1/name/vietnam"
            ).then(r=>r.json()),

            fetch(
                "https://dog.ceo/api/breeds/image/random"
            ).then(r=>r.json())
        ]);

    results.forEach((result,index)=>{

        if(result.status==="fulfilled"){

            renderWidget(
                index,
                result.value
            );

        }else{

            renderWidgetError(
                index,
                result.reason.message
            );
        }
    });

    loadTime.textContent =
        `Data loaded in ${
            Date.now()-startTime
        } ms`;
}

document
.getElementById("refreshBtn")
.addEventListener(
    "click",
    loadDashboard
);

loadDashboard();