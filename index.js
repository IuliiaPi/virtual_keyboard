const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.append(container); // add to DOM

const divInput = document.createElement('div');
divInput.setAttribute('class', 'div-input');
container.append(divInput);

const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'input');
textarea.placeholder = "Tap on the virtual keyboard to start";
divInput.append(textarea);

const divKeyboard = document.createElement('div');
divKeyboard.setAttribute('class', 'keyboard');
container.append(divKeyboard);

const message = document.createElement('div');
message.setAttribute('class', 'message');
message.textContent = "This virtual keyboard was created in Mac. "  + "To switch ENG/RU input methods, press Ctrl+Alt on Windows or Cmd+Alt on Mac. ";
container.append(message);

// let keyboard = [];
// document.onkeypress = function (event) {
//     // console.log (event);
//     keyboard.push(event.charCode);
//     console.log (keyboard);
// }

// const row1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
// const row2 = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
// const row3 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13];
// const row4 = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
// const row5 = [32];

const keyboard = [
    [
    { text: { 'EN': '~', 'en': '`', 'ru': ']' }, css: ['btn_dark'] },
    { text: { 'en': 1, 'ru': '1' }, css: '' },
    { text: { 'en': 2, 'ru': '2' }, css: '' },
    { text: { 'en': 3, 'ru': '3' }, css: '' },
    { text: { 'en': 4, 'ru': '4' }, css: '' },
    { text: { 'en': 5, 'ru': '5' }, css: '' },
    { text: { 'en': 6, 'ru': '6' }, css: '' },
    { text: { 'en': 7, 'ru': '7' }, css: '' },
    { text: { 'en': 8, 'ru': '8' }, css: '' },
    { text: { 'en': 9, 'ru': '9' }, css: '' },
    { text: { 'en': 0, 'ru': '0' }, css: '' },
    { text: { 'EN': '_', 'en': '-', 'ru': '-' }, css: '' },
    { text: { 'EN': '+', 'en': '=', 'ru': '=' }, css: '' },
    // { text: { 'en': "Backspace", 'ru': '' }, css: ['btn_wide', 'btn_dark'], action: backspace },
    { text: { 'EN': 'delete', 'en': "delete", 'ru': 'delete' }, css: ['btn_wide', 'btn_dark'], action: del },
], 
[
    { text: { 'EN': 'tab', 'en': "tab", 'ru': 'tab' }, css: ['btn_wide', 'btn_dark'], action: tab },
    { text: { 'EN': 'Q', 'en': 'q', 'ru': 'й' }, css: '' },
    { text: { 'EN': 'W', 'en': 'w', 'ru': 'ц' }, css: '' },
    { text: { 'EN': 'E', 'en': 'e', 'ru': 'у' }, css: '' },
    { text: { 'EN': 'R', 'en': 'r', 'ru': 'к' }, css: '' },
    { text: { 'EN': 'T', 'en': 't', 'ru': 'е' }, css: '' },
    { text: { 'EN': 'Y', 'en': 'y', 'ru': 'н' }, css: '' },
    { text: { 'EN': 'U', 'en': 'u', 'ru': 'г' }, css: '' },
    { text: { 'EN': 'I', 'en': 'i', 'ru': 'ш' }, css: '' },
    { text: { 'EN': 'O', 'en': 'o', 'ru': 'щ' }, css: '' },
    { text: { 'EN': 'P', 'en': 'p', 'ru': 'з' }, css: '' },
    { text: { 'EN': '{', 'en': '[', 'ru': 'х' }, css: '' },
    { text: { 'EN': '}', 'en': ']', 'ru': 'ъ' }, css: '' },
    { text: { 'EN': '|', 'en': '\\', 'ru': 'ё' }, css: '' },
    // { text: { 'en': "DEL", 'ru': '' }, css: ['btn_wide', 'btn_dark'], action: del },
], [
    { text: { 'EN': 'caps lock', 'en': "caps lock", 'ru': 'caps lock' }, css: ['btn_wide', 'btn_dark'], action: capsLock },
    { text: { 'EN': 'A', 'en': 'a', 'ru': 'ф' }, css: '' },
    { text: { 'EN': 'S', 'en': 's', 'ru': 'ы' }, css: '' },
    { text: { 'EN': 'D', 'en': 'd', 'ru': 'в' }, css: '' },
    { text: { 'EN': 'F', 'en': 'f', 'ru': 'а' }, css: '' },
    { text: { 'EN': 'G', 'en': 'g', 'ru': 'п' }, css: '' },
    { text: { 'EN': 'H', 'en': 'h', 'ru': 'р' }, css: '' },
    { text: { 'EN': 'J', 'en': 'j', 'ru': 'о' }, css: '' },
    { text: { 'EN': 'K', 'en': 'k', 'ru': 'л' }, css: '' },
    { text: { 'EN': 'L', 'en': 'l', 'ru': 'д' }, css: '' },
    { text: { 'EN': ':', 'en': ';', 'ru': 'ж' }, css: '' },
    { text: { 'EN': '"', 'en': "'", 'ru': 'э' }, css: '' },
    { text: { 'EN': 'return', 'en': "return", 'ru': 'return' }, css: ['btn_wide', 'btn_dark'], action: 'return' },
    // { text: { 'en': "ENTER", 'ru': '' }, css: ['btn_wide', 'btn_dark'], action: enter },
], [
    { text: { 'EN': 'shift', 'en': "shift", 'ru': 'shift' }, css: ['btn_wide', 'btn_dark'] },
    { text: { 'EN': 'Z', 'en': 'z', 'ru': 'я' }, css: '' },
    { text: { 'EN': 'X', 'en': 'x', 'ru': 'ч' }, css: '' },
    { text: { 'EN': 'C', 'en': 'c', 'ru': 'с' }, css: '' },
    { text: { 'EN': 'V', 'en': 'v', 'ru': 'м' }, css: '' },
    { text: { 'EN': 'B', 'en': 'b', 'ru': 'и' }, css: '' },
    { text: { 'EN': 'N', 'en': 'n', 'ru': 'т' }, css: '' },
    { text: { 'EN': 'M', 'en': 'm', 'ru': 'ь' }, css: '' },
    { text: { 'EN': '<', 'en': ',', 'ru': 'б' }, css: '' },
    { text: { 'EN': '>', 'en': '.', 'ru': 'ю' }, css: '' },
    { text: { 'EN': '?', 'en': '/', 'ru': '/' }, css: '' },
    { text: { 'EN': '^', 'en': "^", 'ru': '^' }, css: ['btn_dark'], action: up },
    { text: { 'EN': 'shift', 'en': "shift", 'ru': 'shift' }, css: ['btn_wide', 'btn_dark'] },
], [
    // { text: { 'en': "Ctrl", 'ru': '' }, css: ['btn_wide', 'btn_dark'] },
    // { text: { 'en': "Win", 'ru': '' }, css: ['btn_dark'] },
    // { text: { 'en': "Alt", 'ru': '' }, css: ['btn_dark'] },
    { text: { 'en': "fn", 'ru': 'fn' }, css: ['btn_dark'] },
    { text: { 'en': "control", 'ru': 'control' }, css: ['btn_dark'] },
    { text: { 'en': "option", 'ru': 'option' }, css: ['btn_dark'] },
    { text: { 'en': "command", 'ru': 'command' }, css: ['btn_wide', 'btn_dark'] },
    { text: { 'en': " ", 'ru': ' ' }, css: ['btn_extra-wide', 'btn_dark'], action: space },
    { text: { 'en': "command", 'ru': 'command' }, css: ['btn_wide', 'btn_dark'] },
    { text: { 'en': "option", 'ru': 'option' }, css: ['btn_dark'] },
    // { text: { 'en': "Alt", 'ru': '' }, css: ['btn_dark'] },
    // { text: { 'en': "Ctrl", 'ru': '' }, css: ['btn_wide', 'btn_dark'] },
    { text: { 'en': '<', 'ru': '<' }, css: ['btn_dark'], action: left },
    { text: { 'en': 'v', 'ru': 'v' }, css: ['btn_dark'], action: down },
    { text: { 'en': '>', 'ru': '>' }, css: ['btn_dark'], action: right },
]];

let btn;
let key;


keyboard.forEach (row => {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');
    divKeyboard.append(rowDiv);

    row.forEach (key => {
        btn = document.createElement('button');
        btn.className = 'btn';
        btn.setAttribute('type', 'button');

        if (key.css) {
            key.css.forEach (clazz => {
                btn.classList.add (clazz);
            });
        }

        if (key.action) {
            btn.onclick = key.action;
        }


        // if (key.text.EN) {
        //     key.text.forEach (clazz => {
        //         btn.classList.add (clazz);
        //         btn.innerText = key.text.EN;
        //     });
        // }

        btn.innerText = key.text.en;

        rowDiv.append(btn);


        // function switchLang(event) {
        //     console.log('o-o');
        // };

        document.onkeydown = function (event) {
            console.log (event);
            // code: 'MetaLeft'
            // code: 'AltLeft'
            if ((event.code == 'MetaLeft') || (event.code == 'MetaRight') || (event.code == 'ControlLeft')) {
                document.onkeyup = function (event) {
                    if ((event.code == 'AltLeft') || (event.code == 'AltRight')) {
                        btn.classList.add ('active');
                        btn.innerText = key.text.ru;
                        console.log('ho-ho');
                    }
                    else {
                        document.onkeyup = null;
                    }
                }
            }
        }

        document.onkeydown = function (event) {
            if (event.code == 'CapsLock') {
                document.onkeyup = function (event) {
                        // btn.classList.add ('active1');
                        btn.innerText = key.text.ru;
                        console.log('hi-hi');
                    }
                } 
                else {
                        document.onkeyup = null;
                    }
                }
            
        

        

        // function logEvent(event) {
        //     let msg = key.text.en;
        //      log(msg);
        //     }
        //     let boxElem = document.querySelector(".input");
        //     boxElem.addEventListener("click", logEvent);


    //    if (btn.onclick) {
    //     textarea.innerHTML = key.text.en;
    //    }

        // function once () {
        //     // btn.removeEventListener("click", once);
        //     btn.classList.add ('active');
        // }
        // // btn.classList.add ('active');
        // // btn.classList.remove ('active');
        // btn.removeEventListener("click", once);
        // btn.addEventListener("click", once);
        // // btn.classList.remove ('active');  
        

        btn.addEventListener ("click", () => {
            // btn.classList.toggle ('btn:hover'); // Toggle class (adds the class if it's not already present and removes it if it is)
            textarea.innerHTML += key.text.en;

            if ((key.text.en === 'delete') || (key.text.en === 'tab') || (key.text.en === 'caps lock') || (key.text.en === 'return') || (key.text.en === 'shift') || (key.text.en === 'fn') || (key.text.en === 'control') || (key.text.en === 'option') || (key.text.en === 'command')) {
                textarea.innerHTML = null;
            }

            // if (key.text.en === 'q') {
            //     key.text.en = key.text.ru;
            //     // btn.innerText = key.text.ru;
            // }

//             if (!btn.classList.contains('active')) {
//             // btn.classList.remove ('active');
//             btn.classList.add ('active');
//             } else {
//  btn.classList.remove ('active');
//             }
        });

    });
});

// document.onkeydown = function (event) {
//     // console.log (event);
//     // code: 'MetaLeft'
//     // code: 'AltLeft'
//     if ((event.code == 'MetaLeft') || (event.code == 'MetaRight') || (event.code == 'ControlLeft')) {
//         document.onkeyup = function (event) {
//             if ((event.code == 'AltLeft') || (event.code == 'AltRight')) {
//                 btn.classList.add ('active');
//                 btn.innerText = key.text.ru;
//                 console.log('ho-ho');
//             }
//             else {
//                 document.onkeyup = null;
//             }
//         }
//     }
// }



document.querySelector('.input').onclick = function (event) {
const a = {
    q: 'w'
}
document.querySelector('.input').value = a[event.key];
return false;
}


function del () {
    textarea.innerHTML = " ";
}

function tab() {
    textarea.innerHTML += "     ";
}

function enter() {
    // textarea.innerHTML = "enter";
}

function up() {
    // textarea.innerHTML = "up";
}

function left() {
    // textarea.innerHTML = "up";
}

function down() {
    // textarea.innerHTML = "up";
}

function right() {
    // textarea.innerHTML = "up";
}

 function space() {
//  textarea.innerHTML = " ";
}

function backspace() {
    // textarea.innerHTML = "hello";
}

function switchLang(event) {
   
};

function capsLock() {
    // btn.innerText = key.text.EN;
}

// document.onkeypress = function (event) {
//     // console.log (event.code);
//     // console.log (event.keyCode);
//     document.querySelectorAll('.btn').forEach(function (element) {
//         element.classList.remove('active');
//     });
//     document.querySelector('.btn' + event.shiftKey).classList.add('active');
// }



// function space() {
// // btn.addEventListener("click", () => {
//     textarea.innerHTML = " ";

//     // if (textarea.innerText === "Red"){
//     //     textarea.innerText = "Blue";
//     // }else{
//     //     textarea.innerText= "Red";
//     // }
// // });
// }