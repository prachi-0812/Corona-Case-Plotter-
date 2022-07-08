function updateMAp() {
    console.log("UPdating map")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            //console.log(rsp)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                country = element.name;
                recovered = element.recovered;
                death = element.dead;
                infected = element.infected;
                vaccinated = element.vaccinated;
                cases = element.sick;

                if (cases > 100000) {
                    color = "rgb(102, 0, 0)";
                }
                else if (cases > 10000 && cases < 100000) {
                    color = "rgb(230, 0, 0)";
                }
                else if (cases > 5000 && cases < 10000) {
                    color = "rgb(255, 102, 102)";
                }
                else if (cases > 1000 && cases < 5000) {
                    color = "rgb(255,255,102)";
                }
                else if (cases > 100 && cases < 1000) {
                    color = "rgb(170,255,153)";
                }
                else {
                    color = "rgb(21,128,0)";
                }


                

                    new mapboxgl.Marker({
                        draggable: false,
                        color: color,

                    })
                        .setLngLat([longitude, latitude])
                        .setPopup(
                            new mapboxgl.Popup({ offset: 25 }) // add popups
                                .setHTML(

                                    `<h3>${`Country : ${country}`}</h3>
                            <p>${`Total Infected : ${infected}`}</p>
                            <p>${`Present Cases : ${cases}`}</p>
                            <p>${`Recovered : ${recovered}`}</p>
                            <p>${`Total deaths : ${death}`}</p>
                            <p>${`Vaccinated : ${vaccinated}`}</p>`
                                )
                        )
                        .addTo(map);
                });


            })

        }

let interval = 10000;
setInterval(updateMAp, interval);
