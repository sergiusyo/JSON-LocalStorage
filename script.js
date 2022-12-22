// let a = {
//     name: 'Илья',
//     age: 12,
// }

// let b = JSON.stringify(a);

// let c = JSON.parse(b) //JSON.parse обратно из строки объект (строки, числа, массивы и др.)
// console.log(c); //

// document.body.textContent = b;  //JSON.stringify преобразовывает данные в строку
let data = localStorage.getItem('msgList')
let msgList = []

if (data!=='' && data!==null) {
    msgList = JSON.parse(data)
}

function createNewMsg(obj) {
    const itemMsg = document.createElement('li')
    itemMsg.classList.add('list-group-item')

    const itemTitle = document.createElement('h2')
    itemTitle.textContent = obj.name

    const itemText = document.createElement('p')
    itemText.classList.add('lead')
    itemText.textContent = obj.msg

    itemMsg.append(itemTitle)
    itemMsg.append(itemText)

    document.getElementById('msg-list').append(itemMsg)
}

for (const msg of msgList) {
    createNewMsg(msg)   
}

document.getElementById('add-msg-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let userName = document.getElementById('name-inp').value
    let msg = document.getElementById('msg-inp').value

    let msgObj = {
        name: userName,
        msg: msg
    }
    console.log(msgObj);

    msgList.push(msgObj)
    localStorage.setItem('msgList', JSON.stringify(msgList));
    createNewMsg(userName, msg);

    document.getElementById('msg-inp').value = ''
})

                                                                       
// localStorage.setItem('name', 'Илья')
// localStorage.setItem('age', 12)
// localStorage.setItem('age', {name: 'e213'}) //в LocalAStorage нельзя хранить объекты. Но можно хранить данные, представленные в виде строки. Но можем преобразовать его в JSON
// localStorage.setItem('data', JSON.stringify({ name: 'e213' }))

// console.log(localStorage.getItem('name')); //получить данные обратно
// console.log(localStorage.getItem('age'));
// console.log(JSON.parse(localStorage.getItem('data')));