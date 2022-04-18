const axios = require('axios');
const writejson = require("writejson");

const importing = async () => {
    let result = [];
    let data = require("./data/trackedEntityInstances.json");
    
    await axios({
        url: 'https://demos.dhis2.org/hmis_dev/api/trackedEntityInstances?strategy=CREATE_AND_UPDATE',
        method: 'post',
        headers: { 
            'Authorization': 'Basic dGhhaTpEaXN0cmljdDEj', 
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
    .then(function (response) {
        result.push({
            imported: response.data.response.imported,
            updated: response.data.response.updated,
            deleted: response.data.response.deleted,
            ignored: response.data.response.ignored
        });
    })
    .catch(function (error) {
        result.push({
            res: error.response.data
        });
    });
    
    writejson(`./result.json`, { result: result });
}

importing();