'use strict';
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

let elems_1 = document.getElementsByClassName('task-1');
let result = document.getElementById('test');

function unfocus(){
    result.innerHTML = this.value;
}

for(let i = 0; i < elems_1.length; i++){
    elems_1[i].addEventListener('blur', unfocus)
}


// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
// при нажатии на любой из них, но только по первому нажатию. Повторное 
// нажатие на инпут не должно вызывать реакции.

let elems_2 = document.getElementsByClassName('task-2');

function showAlert(){
    alert(this.value);
    this.removeEventListener('click', showAlert);
}

for(let i = 0; i < elems_2.length; i++){
    elems_2[i].addEventListener('click', showAlert)
}


// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
// квадрат числа, которое он содержит.

let elems_3 = document.getElementsByClassName('task-3');

function showSqr(){
    this.innerHTML = this.innerHTML ** 2;
}

for(let i = 0; i < elems_3.length; i++){
    elems_3[i].addEventListener('click', showSqr)
}

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
// свое содержимое на правильное количество символов. Сколько символов 
// должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
// правильное количество, то граница инпута становится зеленой, если 
// неправильное - красной.

let elems_4 = document.getElementsByClassName('task-4');

function checkLength(){
    let correctLength = this.dataset.length;
    let inputLength = this.value.length;

    if (correctLength == inputLength){
        this.style.border = '3px solid #0ad53d';
	} else {
		this.style.border = '3px solid #ff5c5c';
	}
}

for(let i = 0; i < elems_4.length; i++){
    elems_4[i].addEventListener('blur', checkLength)
}