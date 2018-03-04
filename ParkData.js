function getUrl(){
    return 'http://web.sit.kmutt.ac.th/sanit/int493/';
}
function fetchParks(){
    return fetch(getUrl()+'parks.php')
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
        return resJSON.parks;})
}

export default {fetchParks:fetchParks};