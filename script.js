// Make an application that allows a users to:
// View poems
// View one particular poem
// Post a poem 
// Delete a poem.

// A poem object should have an author, a body (the poem itself) and the date added.

// Fetching Poems
function fetchData(){
    fetch('http://localhost:3000/poems')
    .then(response => response.json())
    .then(data => viewPoems(data))
    .catch(error => console.log(error))
}

fetchData()

// To view poems
function viewPoems(poems){
    for(poem of poems){
        // Append the poems to the DOM
        let poemDiv = document.querySelector('#poem')
        let newPoem = document.createElement('div')
        newPoem.innerHTML = `
            <h3>Author: ${poem['author']}</h3>
            <p>${poem['body']}</p>
        `
        poemDiv.appendChild(newPoem)
    }


}

let form = document.querySelector('form')
form.addEventListener('submit', fetchOnePoem)

function fetchOnePoem(e){
    e.preventDefault();
    // Grab id, Return specific poem
    let poemID = document.querySelector('#poemID')
    fetch(`http://localhost:3000/poems/${poemID.value}`)
    .then(response => response.json())
    .then(data =>displayPoem(data))
    .catch(error => console.log(error))
}

function displayPoem(data){
    let newDiv = document.querySelector('#newPoem')
    let displayedPoem = document.createElement('div')
    displayedPoem.innerHTML = `
        <h4>Author: ${data.author}</h4>
        <p>${data.body}</p>
        <p>Date added: ${data.dateAdded}</p>
    `
    newDiv.appendChild(displayedPoem)
}