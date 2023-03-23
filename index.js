// Code your solution here
function findMatching(arrayDriversNames, strName) {
    return arrayDriversNames.filter(name => name.toLowerCase() === strName.toLowerCase());
}
function fuzzyMatch(arrayDriversNames, strName) {
    return arrayDriversNames.filter(name => name.indexOf(strName, 0) === 0);
}
function matchName(arrayDriverObj, strName) {
    return arrayDriverObj.filter(driver => driver.name === strName);
}