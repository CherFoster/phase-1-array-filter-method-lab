function findMatching(drivers, driver){
    return drivers.filter((newDriver) => 
    newDriver.toLowerCase().includes(driver.toLowerCase()))
};

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver){
        return driver.slice(0, query.length) === query
    })
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query)
}