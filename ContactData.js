function getUrl(){
    return 'http://web.sit.kmutt.ac.th/sanit/int493/';
}
function fetchContacts() {
    return fetch(getUrl()+'contacts.php')
    .then(response => response.json())
    .then(resJSON => {return resJSON.contacts;})
}
export default { fetchContacts: fetchContacts };
