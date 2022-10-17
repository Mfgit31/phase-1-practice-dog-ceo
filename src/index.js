console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchData() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(imageData => {
        const obj = imageData.message 
        iterateArray(obj);
    })
}
fetchData()

function iterateArray(oneArray) {
    oneArray.forEach(eachImage => renderImage(eachImage))
}


function renderImage(addsImage) {
   
    const dogImageContainer = document.getElementById("dog-image-container")
    
    const image = document.createElement("img")
    image.src = addsImage
    dogImageContainer.appendChild(image)
}
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchAllBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(dogData => {
        const breedObj = dogData.message 
        iterateArray2(breedObj)
        console.log(breedObj)
    })

function iterateArray2(doggieKinds) {
    doggieKinds.forEach(eachBreed => renderBreed(eachBreed))

    function renderBreed(addBreed) {
        const dogId = document.getElementById('dog-breeds')
        const dogName = document.createElement('li')
          
   



}
fetchAllBreeds()