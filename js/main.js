const request = 'https://dog.ceo/api/breeds/list/all'


const leaderDogAPI = () => {
    fetch(request)
    .then((res) => res.json())
    .then((data) => displayDogs(data.message))
}

const displayDogs = dogs => {
    const keysDog = Object.keys(dogs)
    const dogHTML = keysDog.map(dog => getDog(dog))
    const contentDog = document.getElementById('content-dog')
    contentDog.innerHTML = dogHTML.join(' ')

}

const getDog = (dog) => {
return `<button>${dog}</button>`
}


leaderDogAPI()

function randomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => randomImg(data.message))

}

function randomImg(img) {
    const contentRandom = document.getElementById('content-random')
    const tagimg = document.createElement('img')
    tagimg.src = img
    contentRandom.append(tagimg)
}

randomDog()



const randomButton = document.querySelector('button')


randomButton.addEventListener('click' , function (buttonRandom) {
    location.reload()
})