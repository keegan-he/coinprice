console.log('running this javascript!!!!!!!!!!!')

let state = [];

function displayOutput() {
    console.log('running display output function!')
    for (let x of state.data) {
        //console.log('the for loop is running');
        //console.log(x);
        if (x.symbol === "BTC") {
            console.log("BTC price in USD: ", x.price_usd)
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            //let height = heightsize;
            let maxheight = 400;
            if (heightsize > maxheight) {
                height = heightsize / 10
            } else {
                height === heightsize
            }
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)

        } else if (x.symbol === "LTC") {
            console.log("LTC price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            
            //Trying to fill name into css box // 
            let name = document.createElement("div");
            name.textContent = "this is LTC";
            console.log("this is name", name)


            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            //chart.appendChild(name) // - adds to the DIV
            chart.appendChild(bar)
            console.log(bar)

        } else if (x.symbol === "ETH") {
            console.log("ETH price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)


        } else if (x.symbol === "XLM") {
            console.log("XLM price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)

        } else if (x.symbol === "VET") {
            console.log("VET price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)


        }
    }

}


function displayPrice() {
    console.log('running price function')
    for (let x of state.data) {
        //console.log('the for loop is running');
        //console.log(x);
        if (x.symbol === "BTC") {
            console.log("BTC price in USD: ", x.price_usd)
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            //let height = heightsize;
            let maxheight = 400;
            if (heightsize > maxheight) {
                height = heightsize / 10
            } else {
                height === heightsize
            }
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)

        } else if (x.symbol === "LTC") {
            console.log("LTC price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            
            //Trying to fill name into css box // 
            let name = document.createElement("div");
            name.textContent = "this is LTC";
            console.log("this is name", name)


            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            //chart.appendChild(name) // - adds to the DIV
            chart.appendChild(bar)
            console.log(bar)

        } else if (x.symbol === "ETH") {
            console.log("ETH price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)


        } else if (x.symbol === "XLM") {
            console.log("XLM price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)

        } else if (x.symbol === "VET") {
            console.log("VET price in USD: ", x.price_usd);
            let chart = document.querySelector("#GraphBox");
            let heightsize = x.price_usd
            let height = heightsize;
            let bar = document.createElement("div");
            bar.classList.add("BarChart-bar")
            bar.style.height = height + "%";
            chart.appendChild(bar)
            console.log(bar)


        }
    }

}
//console.log(x.symbol)
//console.log(x.price_usd)

//for (let y of x.symbol) {
//    let chart  = document.querySelector("#GraphBox");
//    let height = 70;
//    let bar = document.createElement("div");
//    bar.classList.add("BarChart-bar")
//    bar.style.height = height + "%";
//    chart.appendChild(bar)
//    console.log(bar)
//}






function doFetch() {
    fetch('https://api.coinlore.com/api/tickers/')
        .then(response => response.json())
        .then(data => {
            console.log('i fetched the data!')
            //console.log(data);
            state = data;

            displayOutput();
        });
}

doFetch();