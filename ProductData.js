function getUrl(){
    return 'http://web.sit.kmutt.ac.th/sanit/int493/';
}

function getImageUrl(){
    return getUrl()+'products/images/';
}

function fetchProduct(productline){
    if(typeof productline == "undefined"){
        return fetch(getUrl()+'products.php')
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
        return resJSON.products;})
    } else {
    return fetch(getUrl()+'products.php'+'?productline='+productline)
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
        return resJSON.products;})
    }
}


export default {fetchProduct:fetchProduct, getImageUrl:getImageUrl};