let planets = [{
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000"
    },
    {
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "temperate, tropical",
        gravity: "1 standard",
        terrain: "jungle, rainforests",
        surface_water: "8",
        population: "1000"
    },
    {
        name: "Hoth",
        rotation_period: "23",
        orbital_period: "549",
        diameter: "7200",
        climate: "frozen",
        gravity: "1.1 standard",
        terrain: "tundra, ice caves, mountain ranges",
        surface_water: "100",
        population: "unknown"
    },
    {
        name: "Dagobah",
        rotation_period: "23",
        orbital_period: "341",
        diameter: "8900",
        climate: "murky",
        gravity: "N/A",
        terrain: "swamp, jungles",
        surface_water: "8",
        population: "unknown"
    },
    {
        name: "Bespin",
        rotation_period: "12",
        orbital_period: "5110",
        diameter: "118000",
        climate: "temperate",
        gravity: "1.5 (surface), 1 standard (Cloud City)",
        terrain: "gas giant",
        surface_water: "0",
        population: "6000000"
    },
    {
        name: "Endor",
        rotation_period: "18",
        orbital_period: "402",
        diameter: "4900",
        climate: "temperate",
        gravity: "0.85 standard",
        terrain: "forests, mountains, lakes",
        surface_water: "8",
        population: "30000000"
    },
    {
        name: "Naboo",
        rotation_period: "26",
        orbital_period: "312",
        diameter: "12120",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grassy hills, swamps, forests, mountains",
        surface_water: "12",
        population: "4500000000"
    },
    {
        name: "Coruscant",
        rotation_period: "24",
        orbital_period: "368",
        diameter: "12240",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "cityscape, mountains",
        surface_water: "unknown",
        population: "1000000000000"
    },
    {
        name: "Kamino",
        rotation_period: "27",
        orbital_period: "463",
        diameter: "19720",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "ocean",
        surface_water: "100",
        population: "1000000000"
    },
    {
        name: "Geonosis",
        rotation_period: "30",
        orbital_period: "256",
        diameter: "11370",
        climate: "temperate, arid",
        gravity: "0.9 standard",
        terrain: "rock, desert, mountain, barren",
        surface_water: "5",
        population: "100000000000"
    }
];

// Filter Table
function realtimeSearch() {
    let resultData = document.getElementById("result-data");
    let keyword = document.getElementById("input-search").value.toLowerCase();
    let resultPlanet =
        "<thead><tr><th>Planet Name</th><th>Rotation Periode</th><th>Orbital Periode</th><th>Diameter</th><th>Climate</th><th>Gravity</th><th>Terrain</th><th>Surface Water</th><th>Population</th></tr></thead>";
    for (let i = 0; i < planets.length; i++) {
        let nameSearch = planets[i].name;
        let rotationSearch = planets[i].rotation_period;
        let orbitalSearch = planets[i].orbital_period;
        let diameterSearch = planets[i].diameter;
        let climateSearch = planets[i].climate;
        let gravitySearch = planets[i].gravity;
        let terrainSearch = planets[i].terrain;
        let surface_waterSearch = planets[i].surface_water;
        let populationSearch = planets[i].population;

        if (nameSearch.toLowerCase().includes(keyword)) {
            resultPlanet +=
                "<tr><td>" +
                nameSearch +
                "</td><td>" +
                rotationSearch +
                "</td><td>" +
                orbitalSearch +
                "</td><td>" +
                diameterSearch +
                "</td><td>" +
                climateSearch +
                "</td><td>" +
                gravitySearch +
                "</td><td>" +
                terrainSearch +
                "</td><td>" +
                surface_waterSearch +
                "</td><td>" +
                populationSearch +
                "</td></tr>";
        }
    }

    resultData.innerHTML = resultPlanet;
}

//Showing Data Planet
function showDataPlanet() {
    let planetData = document.getElementById("result-data");

    let tablePlanet =
        "<thead><tr><th>Planet Name</th><th>Rotation Periode</th><th>Orbital Periode</th><th>Diameter</th><th>Climate</th><th>Gravity</th><th>Terrain</th><th>Surface Water</th><th>Population</th></tr></thead>";

    for (let j = 0; j < planets.length; j++) {
        let namePlanet = planets[j].name;
        let rotationPlanet = planets[j].rotation_period;
        let orbitalPlanet = planets[j].orbital_period;
        let diameterPlanet = planets[j].diameter;
        let climatePlanet = planets[j].climate;
        let gravitySearch = planets[j].gravity;
        let terrainSearch = planets[j].terrain;
        let surface_waterSearch = planets[j].surface_water;
        let populationSearch = planets[j].population;



        tablePlanet +=
            "<tr><td>" +
            namePlanet +
            "</td><td>" +
            rotationPlanet +
            "</td><td>" +
            orbitalPlanet +
            "</td><td>" +
            diameterPlanet +
            "</td><td>" +
            climatePlanet +
            "</td><td>" +
            gravitySearch +
            "</td><td>" +
            terrainSearch +
            "</td><td>" +
            surface_waterSearch +
            "</td><td>" +
            populationSearch +
            "</td></tr>";

    }

    planetData.innerHTML = tablePlanet;
}