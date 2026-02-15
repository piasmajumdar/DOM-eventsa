document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('button clicked');
        const pageTitleElement = document.getElementById('page-title');
        console.log(pageTitleElement);
        pageTitleElement.innerText = 'Updated page title text.'
    })

document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoEl = document.getElementById('user-info');
        userInfoEl.innerText = 'user logged in successfully';
    })



// Update the name from given input
// 1. set event listener
document.getElementById('btn-update')
    .addEventListener('click', function () {
        console.log('update button clicked')
        // 2. get the text from the input field
        const nameInput = document.getElementById('input-name');
        console.log(nameInput);
        const name = nameInput.value;
        console.log('name: ', name);

        // 3. set the name
        const pName = document.getElementById('name');
        pName.innerText = name;
    })

// Update the age from given input
document.getElementById('btn-update-age')
    .addEventListener('click', function () {
        const inputAge = document.getElementById('input-age');
        const age = inputAge.value;

        const pAge = document.getElementById('age');
        pAge.innerText = `Age: ${age} year`;
    })