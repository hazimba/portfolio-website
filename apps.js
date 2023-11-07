const profile = document.querySelector('#profile')
const experience = document.querySelector('#experience')
const newJourney = document.querySelector('#newJourney')
const education = document.querySelector('#education')
const languages = document.querySelector('#language')
const short = document.querySelector('#short')
const long = document.querySelector('#long')
const textBox = document.querySelector('#textbox')
const resume = document.querySelector('#resume')

const lightbutton = document.getElementById('light-button')
const darkButton = document.querySelector('#dark-button')
const containerHeader = document.getElementById('container-header')
const containerMain = document.getElementById('container-main')
const userName = document.getElementById('user-name')
const helloTitle = document.getElementById('hello-title')
const containerFooter = document.getElementById('container-footer')
const containerEmpty = document.getElementById('container-right-emptybox')
const userImage = document.getElementById('user-image')
const toRemoved = document.getElementById('toRemoved')


darkButton.addEventListener('click', function (){
    containerMain.style.backgroundColor = '#181f25',
    helloTitle.style.color = '#f3f5f7'
    userName.style.color = '#f3f5f7'
    containerEmpty.style.backgroundColor = '#29333d'
    containerEmpty.style.color = '#f3f5f7'
    userImage.style.borderColor = '#29333d'
})

lightbutton.addEventListener('click', function (){
    containerMain.style.backgroundColor = '#f3f5f7',
    helloTitle.style.color = '#29333d'
    userName.style.color = '#29333d'
    containerEmpty.style.backgroundColor = '#ced4da'
    containerEmpty.style.color = '#29333d'
    userImage.style.borderColor = '#ced4da'
})


const ENDPOINT = 'https://gist.githubusercontent.com/hazimba/ae3d27274bb1ce7d29d132dc17f8474d/raw/199d95407f492b9e64d54bbc66d8f4f3c2258abd/resume.json'

async function getData(){
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    return data
}

// profile
function displayProfile( { profile }){  
    textBox.innerHTML = `Age : ${profile.age} <br>
    Phone number : ${profile.phone} <br>
    Email address: ${profile.email}`
}

profile.addEventListener('click', async() =>{
    const data = await getData()
    displayProfile(data)
})

// education
async function displayEducation( { education }){

    const response = await fetch(ENDPOINT)
    const data = await response.json()

    let secCourse = data.education[0].course
    let secCgpa = data.education[0].result

    let firstCourse = data.education[1].course
    let firstCgpa = data.education[1].result

    textBox.innerHTML = `Product of UiTM <br>
    2017 - 2020 : ${secCourse} (${secCgpa})<br>
    2014 - 2017 : ${firstCourse} (${firstCgpa})<br>
    `
}

education.addEventListener('click', async() =>{
    const data = getData()
    displayEducation(data)
})

// journey
function displayJourney({ journey }){
    textBox.textContent = journey
}

newJourney.addEventListener('click', async() =>{
    const data = await getData()
    displayJourney(data)
})

// experience
async function displayExperience({ experience }){

    const response = await fetch(ENDPOINT)
    const data = await response.json()

    let firstExp = data.experience[0].company
    let firstTitle = data.experience[0].title
    let firstTask = data.experience[0].task 

    textBox.innerHTML = `November 2020 - November 2022 <br>
    ${firstExp} <br>
    ${firstTitle}
    `
}

experience.addEventListener('click', async() =>{
    const data = getData()
    displayExperience(data)
})


// short term
function displayShortTerm( { short }){
    textBox.innerHTML = ''
    short.forEach(list =>{
        textBox.innerHTML += `
            <li>${list}</li>
        `
    })
}

short.addEventListener('click', async() =>{
    const data = await getData()
    displayShortTerm(data)
})

// long term
function displayLongTerm( { long }){
    textBox.innerHTML = ''
    long.forEach(list =>{
        textBox.innerHTML += `
            <li>${list}</li>
        `
    })
}

long.addEventListener('click', async() =>{
    const data = await getData()
    displayLongTerm(data)
})


// language
function displayLanguage({ language }){
    textBox.innerHTML = ''
    language.forEach(lang =>{
        textBox.innerHTML += `
            <li>${lang}</li>
        `
    })
}

languages.addEventListener('click', async() => {
    const data = await getData()
    console.log(data)
    displayLanguage(data)
})

// resume
resume.addEventListener('click', () =>{
    textBox.innerHTML = ''
    textBox.innerHTML = `
    <img style="height: 200px; width: 200px; border: 1px solid black;" src="./asset/QR code.png" alt="">
    `
})

