const faker = require('@faker-js/faker/locale/en');
const moment = require('moment');



const sex = ["MALE", "FEMALE"];



const randomNumber = (min,max) => Math.round(Math.random()*(max-min+1)+min);
const getDateFromWeek = (week, year) => moment().day(1).year(year).week(week + 1).toDate().toISOString().substring(0,10); // Get the Monday of the week
const generateUID = (limit = 11) => {
    const allowedLetters = [
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ].join("");
    const allowedChars = ["0123456789", allowedLetters].join("");
    const arr = [sample(allowedLetters)]; // sample 1 to make sure it starts with a letter
    for (let i = 0; i < limit - 1; i++) {
      arr.push(sample(allowedChars));
    }
    return arr.join("");
};
const sample = (d, fn = Math.random) => {
    if (d.length === 0) {
        return;
    }
    return d[Math.round(fn() * (d.length - 1))];
};



module.exports = ( templateID, period, orgUnit, coordinates, epids ) => {
    console.log( templateID, period, orgUnit, coordinates );

    const enrollDate = getDateFromWeek( parseInt(period.split(" ")[0].replace("W","")), parseInt(period.split(" ")[1]) );
    
    const templates = [{
        template: 1,
        attributes: [{
            attribute: "x0n3BxFa6SC",
            value: "MEASLES"
        }, {
            attribute: "a1asiVlyTbc",
            value: `LAO-VTN-VTN-22-${randomNumber(100,999)}-MEA`
        }, {
            attribute: "sB1IHYu2xQT",
            value: faker.name.firstName()
        }, {
            attribute: "ENRjVGxVL6l",
            value: faker.name.lastName()
        }, {
            attribute: "oindugucx72",
            value: sample(sex)
        }, {
            attribute: "NI0QRzJvQ0k", // Date of Birth
            value: faker.date.between("2018-01-01","2021-12-31").toISOString().substring(0,10)
        }],
        events: [{
            eventDate: enrollDate,
            programStage: "GIb6Ge9PCc4",
            dataValues: [{
                dataElement: "CzeRAnZg8eM", // Coordinate anywhere in Lao
                value: `[${coordinates}]`
            }, {
                dataElement: "DllEa3TJHNo",
                value: moment(enrollDate).subtract(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "Aif45J6yuAp",
                value: enrollDate
            }, {
                dataElement: "pXGhYbf5cAP",
                value: "OUTPATIENT"
            }, {
                dataElement: "LNRDN39NSfY",
                value: "YES"
            }, {
                dataElement: "Uu6PpFsYhLz",
                value: "YES"
            }, {
                dataElement: "S45CqdVcFXC",
                value: "YES"
            }, {
                dataElement: "gtvfclT4CR0",
                value: "YES"
            }, {
                dataElement: "sUBopwUhTDn",
                value: "YES"
            }, {
                dataElement: "b7a2godKfHF",
                value: "NO"
            }, {
                dataElement: "Mw6RIBmliHA",
                value: "0"
            }, {
                dataElement: "yJBRhOz5h8c",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "CUsYcwYJVbA",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "BoIxN7Kfj07",
                value: "ALIVE"
            }, {
                dataElement: "F5Hk14hp8mT",
                value: moment(enrollDate).add(7,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: enrollDate,
            programStage: "G0ePNuYPT87",
            dataValues: [{
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "P36lcIeZyhF",
                value: enrollDate
            }, {
                dataElement: "RfciWN4qeZk",
                value: enrollDate
            }]
        }, {
            eventDate: moment(enrollDate).add(2,'days').toISOString().substring(0,10),
            programStage: "cSkxPgrdUKE",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(3,'days').toISOString().substring(0,10),
            programStage: "F9CrPrvrtb1",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "hN5qrbGeYnF",
                value: "LAB1"
            }, {
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "m894Gs1tnvY",
                value: "POSITIVE"
            }, {
                dataElement: "Nmfba979Tzz",
                value: "POSITIVE"
            }, {
                dataElement: "mlfXWNJ16dz",
                value: "B3"
            }, {
                dataElement: "zyJarMnRD6D",
                value: "NEGATIVE"
            }, {
                dataElement: "wdgpOmKebBB",
                value: "NEGATIVE"
            }, {
                dataElement: "bX9jmncMHLC",
                value: "MEASLES"
            }, {
                dataElement: "jsPUCz42QTR",
                value: moment(enrollDate).add(3,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(4,'days').toISOString().substring(0,10),
            programStage: "r9R6DTQdVgR",
            dataValues: [{
                dataElement: "BLiSlEmoEQH",
                value: "CM"
            }]
        }]
    }, {
        template: 2,
        attributes: [{
            attribute: "x0n3BxFa6SC",
            value: "MEASLES"
        }, {
            attribute: "a1asiVlyTbc",
            value: `LAO-PHG-PHG-22-${randomNumber(100,999)}-MEA`
        }, {
            attribute: "sB1IHYu2xQT",
            value: faker.name.firstName()
        }, {
            attribute: "ENRjVGxVL6l",
            value: faker.name.lastName()
        }, {
            attribute: "oindugucx72",
            value: sample(sex)
        }, {
            attribute: "NI0QRzJvQ0k", // Date of Birth
            value: faker.date.between("2018-01-01","2021-12-31").toISOString().substring(0,10)
        }],
        events: [{
            eventDate: enrollDate,
            programStage: "GIb6Ge9PCc4",
            dataValues: [{
                dataElement: "CzeRAnZg8eM", // Coordinate anywhere in Lao
                value: `[${coordinates}]`
            }, {
                dataElement: "DllEa3TJHNo",
                value: moment(enrollDate).subtract(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "Aif45J6yuAp",
                value: enrollDate
            }, {
                dataElement: "pXGhYbf5cAP",
                value: "INPATIENT"
            }, {
                dataElement: "nL9CaG5rvbL",
                value: enrollDate
            }, {
                dataElement: "LNRDN39NSfY",
                value: "YES"
            }, {
                dataElement: "Uu6PpFsYhLz",
                value: "YES"
            }, {
                dataElement: "S45CqdVcFXC",
                value: "YES"
            }, {
                dataElement: "gtvfclT4CR0",
                value: "YES"
            }, {
                dataElement: "AWMsPSyfwgi",
                value: "YES"
            }, {
                dataElement: "sUBopwUhTDn",
                value: "YES"
            }, {
                dataElement: "b7a2godKfHF",
                value: "NO"
            }, {
                dataElement: "Mw6RIBmliHA",
                value: "0"
            }, {
                dataElement: "yJBRhOz5h8c",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "CUsYcwYJVbA",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "BoIxN7Kfj07",
                value: "ALIVE"
            }, {
                dataElement: "F5Hk14hp8mT",
                value: moment(enrollDate).add(7,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: enrollDate,
            programStage: "G0ePNuYPT87",
            dataValues: [{
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "P36lcIeZyhF",
                value: enrollDate
            }, {
                dataElement: "RfciWN4qeZk",
                value: enrollDate
            }]
        }, {
            eventDate: moment(enrollDate).add(2,'days').toISOString().substring(0,10),
            programStage: "cSkxPgrdUKE",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(3,'days').toISOString().substring(0,10),
            programStage: "F9CrPrvrtb1",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "hN5qrbGeYnF",
                value: "LAB1"
            }, {
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "m894Gs1tnvY",
                value: "POSITIVE"
            }, {
                dataElement: "Nmfba979Tzz",
                value: "POSITIVE"
            }, {
                dataElement: "mlfXWNJ16dz",
                value: "B3"
            }, {
                dataElement: "zyJarMnRD6D",
                value: "NEGATIVE"
            }, {
                dataElement: "wdgpOmKebBB",
                value: "NEGATIVE"
            }, {
                dataElement: "bX9jmncMHLC",
                value: "MEASLES"
            }, {
                dataElement: "jsPUCz42QTR",
                value: moment(enrollDate).add(3,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(4,'days').toISOString().substring(0,10),
            programStage: "r9R6DTQdVgR",
            dataValues: [{
                dataElement: "BLiSlEmoEQH",
                value: "CM"
            }]
        }]
    }, {
        template: 3,
        attributes: [{
            attribute: "x0n3BxFa6SC",
            value: "MEASLES"
        }, {
            attribute: "a1asiVlyTbc",
            value: `LAO-BKO-BKO-22-${randomNumber(100,999)}-MEA`
        }, {
            attribute: "sB1IHYu2xQT",
            value: faker.name.firstName()
        }, {
            attribute: "ENRjVGxVL6l",
            value: faker.name.lastName()
        }, {
            attribute: "oindugucx72",
            value: sample(sex)
        }, {
            attribute: "NI0QRzJvQ0k", // Date of Birth
            value: faker.date.between("2018-01-01","2021-12-31").toISOString().substring(0,10)
        }],
        events: [{
            eventDate: enrollDate,
            programStage: "GIb6Ge9PCc4",
            dataValues: [{
                dataElement: "CzeRAnZg8eM", // Coordinate anywhere in Lao
                value: `[${coordinates}]`
            }, {
                dataElement: "DllEa3TJHNo",
                value: moment(enrollDate).subtract(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "Aif45J6yuAp",
                value: enrollDate
            }, {
                dataElement: "pXGhYbf5cAP",
                value: "OUTPATIENT"
            }, {
                dataElement: "LNRDN39NSfY",
                value: "YES"
            }, {
                dataElement: "p3FV2eRTx3X",
                value: 1
            }, {
                dataElement: "tvrV3qdIdFy",
                value: "MMR"
            }, {
                dataElement: "Uu6PpFsYhLz",
                value: "YES"
            }, {
                dataElement: "S45CqdVcFXC",
                value: "YES"
            }, {
                dataElement: "gtvfclT4CR0",
                value: "YES"
            }, {
                dataElement: "sUBopwUhTDn",
                value: "YES"
            }, {
                dataElement: "b7a2godKfHF",
                value: "NO"
            }, {
                dataElement: "Mw6RIBmliHA",
                value: "0"
            }, {
                dataElement: "yJBRhOz5h8c",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "CUsYcwYJVbA",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "BoIxN7Kfj07",
                value: "ALIVE"
            }, {
                dataElement: "F5Hk14hp8mT",
                value: moment(enrollDate).add(7,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: enrollDate,
            programStage: "G0ePNuYPT87",
            dataValues: [{
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "P36lcIeZyhF",
                value: enrollDate
            }, {
                dataElement: "RfciWN4qeZk",
                value: enrollDate
            }]
        }, {
            eventDate: moment(enrollDate).add(2,'days').toISOString().substring(0,10),
            programStage: "cSkxPgrdUKE",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(3,'days').toISOString().substring(0,10),
            programStage: "F9CrPrvrtb1",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "hN5qrbGeYnF",
                value: "LAB1"
            }, {
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "m894Gs1tnvY",
                value: "POSITIVE"
            }, {
                dataElement: "Nmfba979Tzz",
                value: "POSITIVE"
            }, {
                dataElement: "mlfXWNJ16dz",
                value: "B3"
            }, {
                dataElement: "zyJarMnRD6D",
                value: "NEGATIVE"
            }, {
                dataElement: "wdgpOmKebBB",
                value: "NEGATIVE"
            }, {
                dataElement: "bX9jmncMHLC",
                value: "MEASLES"
            }, {
                dataElement: "jsPUCz42QTR",
                value: moment(enrollDate).add(3,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(4,'days').toISOString().substring(0,10),
            programStage: "r9R6DTQdVgR",
            dataValues: [{
                dataElement: "BLiSlEmoEQH",
                value: "CM"
            }]
        }]
    }, {
        template: 4,
        attributes: [{
            attribute: "x0n3BxFa6SC",
            value: "MEASLES"
        }, {
            attribute: "a1asiVlyTbc",
            value: `LAO-KMN-KMN-22-${randomNumber(100,999)}-MEA`
        }, {
            attribute: "sB1IHYu2xQT",
            value: faker.name.firstName()
        }, {
            attribute: "ENRjVGxVL6l",
            value: faker.name.lastName()
        }, {
            attribute: "oindugucx72",
            value: sample(sex)
        }, {
            attribute: "NI0QRzJvQ0k", // Date of Birth
            value: faker.date.between("2018-01-01","2021-12-31").toISOString().substring(0,10)
        }],
        events: [{
            eventDate: enrollDate,
            programStage: "GIb6Ge9PCc4",
            dataValues: [{
                dataElement: "CzeRAnZg8eM", // Coordinate anywhere in Lao
                value: `[${coordinates}]`
            }, {
                dataElement: "DllEa3TJHNo",
                value: moment(enrollDate).subtract(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "Aif45J6yuAp",
                value: enrollDate
            }, {
                dataElement: "pXGhYbf5cAP",
                value: "OUTPATIENT"
            }, {
                dataElement: "LNRDN39NSfY",
                value: "YES"
            }, {
                dataElement: "Uu6PpFsYhLz",
                value: "YES"
            }, {
                dataElement: "S45CqdVcFXC",
                value: "YES"
            }, {
                dataElement: "gtvfclT4CR0",
                value: "YES"
            }, {
                dataElement: "sUBopwUhTDn",
                value: "YES"
            }, {
                dataElement: "b7a2godKfHF",
                value: "NO"
            }, {
                dataElement: "Mw6RIBmliHA",
                value: "0"
            }, {
                dataElement: "yJBRhOz5h8c",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "CUsYcwYJVbA",
                value: moment(enrollDate).subtract(1,'days').toISOString().substring(0,10)
            }, {
                dataElement: "BoIxN7Kfj07",
                value: "ALIVE"
            }, {
                dataElement: "F5Hk14hp8mT",
                value: moment(enrollDate).add(7,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: enrollDate,
            programStage: "G0ePNuYPT87",
            dataValues: [{
                dataElement: "fkqcoDLvzED",
                value: "URINE"
            }, {
                dataElement: "P36lcIeZyhF",
                value: enrollDate
            }, {
                dataElement: "RfciWN4qeZk",
                value: enrollDate
            }]
        }, {
            eventDate: moment(enrollDate).add(2,'days').toISOString().substring(0,10),
            programStage: "cSkxPgrdUKE",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(3,'days').toISOString().substring(0,10),
            programStage: "F9CrPrvrtb1",
            dataValues: [{
                dataElement: "VxdyTZMq4fz",
                value: "NATIONAL"
            }, {
                dataElement: "o59BSUIg0Q5",
                value: moment(enrollDate).add(2,'days').toISOString().substring(0,10)
            }, {
                dataElement: "hN5qrbGeYnF",
                value: "LAB1"
            }, {
                dataElement: "fkqcoDLvzED",
                value: "BLOOD"
            }, {
                dataElement: "kBBrPq9mMEw",
                value: "ADEQUATE"
            }, {
                dataElement: "m894Gs1tnvY",
                value: "POSITIVE"
            }, {
                dataElement: "Nmfba979Tzz",
                value: "POSITIVE"
            }, {
                dataElement: "mlfXWNJ16dz",
                value: "B3"
            }, {
                dataElement: "zyJarMnRD6D",
                value: "NEGATIVE"
            }, {
                dataElement: "wdgpOmKebBB",
                value: "NEGATIVE"
            }, {
                dataElement: "bX9jmncMHLC",
                value: "MEASLES"
            }, {
                dataElement: "jsPUCz42QTR",
                value: moment(enrollDate).add(3,'days').toISOString().substring(0,10)
            }]
        }, {
            eventDate: moment(enrollDate).add(4,'days').toISOString().substring(0,10),
            programStage: "r9R6DTQdVgR",
            dataValues: [{
                dataElement: "BLiSlEmoEQH",
                value: "CM"
            }]
        }]
    }]
    
    return {
        orgUnit: orgUnit,
        trackedEntityType: "MCPQUTHX1Ze",
        trackedEntityInstance: generateUID(),
        attributes: templates.find( ({template}) => template === templateID ).attributes.map( attribute => {
            if ( attribute.attribute === "a1asiVlyTbc" && epids.find( id => id === attribute.value ) ) {
                let epid = attribute.value;
                while ( epids.find( id => id === epid ) ) {
                    epid =  templateID === 1 ? `LAO-VTN-VTN-22-${randomNumber(100,999)}-MEA` :
                                templateID === 2 ? `LAO-PHG-PHG-22-${randomNumber(100,999)}-MEA` :
                                    templateID === 3 ? `LAO-BKO-BKO-22-${randomNumber(100,999)}-MEA`: 
                                        `LAO-KMN-KMN-22-${randomNumber(100,999)}-MEA`
                }
                return {
                    attribute: "a1asiVlyTbc",
                    value: epid
                }
            }
            else {
                return attribute;
            }
        }),
        enrollments: [{
            orgUnit: orgUnit,
            program: "YcxRnVWkbQ1",
            enrollment: generateUID(),
            enrollmentDate: enrollDate,
            incidentDate: enrollDate,
            events: templates.find( ({template}) => template === templateID ).events.map( event => ({
                ...event,
                program: "YcxRnVWkbQ1",
                orgUnit: orgUnit,
                event: generateUID(),
                status: "ACTIVE"
            }))
        }]
    }
}