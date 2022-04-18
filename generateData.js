const xlsx = require("xlsx")
const writejson = require("writejson");

const getTemplate = require("./getTemplate.js");

const workbook = xlsx.readFile("./measles_TEIs.xlsx");
const data = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let TEIs = [];
let epids = [];

const randomPointsOnPolygon = require("random-points-on-polygon");
const ou = require("./lao.json");


const getList = () =>   TEIs.map( ({attributes}) => 
                                    attributes.find( ({attribute}) => attribute === "a1asiVlyTbc" ).value
                        )


data.forEach( row => {
    Object.keys(row).forEach( orgUnit => {
        if ( orgUnit !== "periodname" && row[orgUnit] !== '' ) {
            
            const coordinates = randomPointsOnPolygon(row[orgUnit], {
                type: "Feature",
                geometry: ou.geometry,
                properties: {}
            });

            for ( i = 0; i < row[orgUnit]; i++ ) {
                TEIs.push(
                    getTemplate(
                        Math.round( Math.random() * 3 ) + 1,
                        row["periodname"],
                        orgUnit,
                        coordinates[i].geometry.coordinates.toString(),
                        epids
                    )
                );

                epids = getList();
            }

        }
    })
});

writejson("./data/trackedEntityInstances.json", {
    trackedEntityInstances: TEIs
});