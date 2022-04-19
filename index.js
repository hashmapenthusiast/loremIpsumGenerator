const button = document.querySelector('#lorem')

function makeLorem(paragraphs = 1) {
    let newParagraph = document.createElement('p');
    for (let i = 0; i < 150; i++) {
        newParagraph.textContent += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    document.body.appendChild(newParagraph)
}

button.addEventListener('click', makeLorem)

let sounds = {
    "i:": {
        "ref": "eel",
        "und": "ee",
        "order": 0,
        "pic": "assets/eel.jpg"
    },
    "ɪ": {
        "ref": "iguana",
        "und": "i",
        "order": 1,
        "pic": "assets/iguana.jpg"
    },
    "ʊ": {
        "ref": "wood",
        "und": "oo",
        "order": 2,
        "pic": "assets/wood.jpg"
    },
    "u:": {
        "ref": "blue",
        "und": "u",
        "order": 3,
        "pic": "assets/blue.png"
    },
    "ɪə": {
        "ref": "ear",
        "und": "ear",
        "order": 4,
        "pic": "assets/ear.jpg"
    },
    "eɪ": {
        "ref": "eight",
        "und": "ei",
        "order": 5,
        "pic": "assets/eight.jpg"
    },
    "e": {
        "ref": "egg",
        "und": "e",
        "order": 6,
        "pic": "assets/egg.webp"
    },
    "ə": {
        "ref": "balloon",
        "und": "a",
        "order": 7,
        "pic": "assets/balloon.webp"
    },
    "ɜ:": {
        "ref": "elephant",
        "und": "e",
        "order": 8,
        "pic": "assets/elephant.jpg"
    },
    "ɔ:": {
        "ref": "door",
        "und": "oor",
        "order": 9,
        "pic": "assets/door.webp"
    },
    "ʊə": {
        "ref": "flower",
        "und": "ow",
        "order": 10,
        "pic": "assets/flower.webp"
    },
    "ɔɪ": {
        "ref": "oil",
        "und": "oi",
        "order": 11,
        "pic": "assets/oil.webp"
    },
    "əʊ": {
        "ref": "old",
        "und": "o",
        "order": 12,
        "pic": "assets/old.jpg"
    },
    "æ": {
        "ref": "ant",
        "und": "a",
        "order": 13,
        "pic": "assets/ant.webp"
    },
    "ʌ": {
        "ref": "bus",
        "und": "u",
        "order": 14,
        "pic": "assets/bus.jpg"
    },
    "ɑ:": {
        "ref": "arm",
        "und": "ar",
        "order": 15,
        "pic": "assets/arm.jpg"
    },
    "ɒ": {
        "ref": "knot",
        "und": "o",
        "order": 16,
        "pic": "assets/knot.jpg"
    },
    "eə": {
        "ref": "pear",
        "und": "ea",
        "order": 17,
        "pic": "assets/pear.png"
    },
    "ɑɪ": {
        "ref": "pie",
        "und": "i",
        "order": 18,
        "pic": "assets/pie.jpg"
    },
    "ɑʊ": {
        "ref": "owl",
        "und": "ow",
        "order": 19,
        "pic": "assets/owl.jpg"
    },
    "p": {
        "ref": "parrot",
        "und": "p",
        "order": 20,
        "pic": "assets/parrot.jpg"
    },
    "b": {
        "ref": "bubble",
        "und": "b",
        "order": 21,
        "pic": "assets/bubble.webp"
    },
    "t": {
        "ref": "tiger",
        "und": "t",
        "order": 22,
        "pic": "assets/tiger.webp"
    },
    "d": {
        "ref": "dog",
        "und": "d",
        "order": 23,
        "pic": "assets/dog.jpg"
    },
    "tʃ": {
        "ref": "cheese",
        "und": "ch",
        "order": 24,
        "pic": "assets/cheese.webp"
    },
    "dʒ": {
        "ref": "giraffe",
        "und": "g",
        "order": 25,
        "pic": "assets/giraffe.jpg"
    },
    "k": {
        "ref": "car",
        "und": "c",
        "order": 26,
        "pic": "assets/car.jpg"
    },
    "ɡ": {
        "ref": "gun",
        "und": "g",
        "order": 27,
        "pic": "assets/gun.jpg"
    },
    "f": {
        "ref": "fox",
        "und": "f",
        "order": 28,
        "pic": "assets/fox.jpg"
    },
    "v": {
        "ref": "vampire",
        "und": "v",
        "order": 29,
        "pic": "assets/vampire.webp"
    },
    "θ": {
        "ref": "three",
        "und": "th",
        "order": 30,
        "pic": "assets/three.png"
    },
    "ð": {
        "ref": "thanos",
        "und": "th",
        "order": 31,
        "pic": "assets/thanos.jpeg"
    },
    "s": {
        "ref": "snake",
        "und": "s",
        "order": 32,
        "pic": "assets/snake.webp"
    },
    "z": {
        "ref": "zebra",
        "und": "z",
        "order": 33,
        "pic": "assets/zebra.webp"
    },
    "ʃ": {
        "ref": "shoe",
        "und": "sh",
        "order": 34,
        "pic": "assets/shoe.webp"
    },
    "ʒ": {
        "ref": "treasure",
        "und": "s",
        "order": 35,
        "pic": "assets/treasure.jpg"
    },
    "m": {
        "ref": "money",
        "und": "m",
        "order": 36,
        "pic": "assets/money.jpg"
    },
    "n": {
        "ref": "net",
        "und": "n",
        "order": 37,
        "pic": "assets/net.jpg"
    },
    "ŋ": {
        "ref": "long",
        "und": "ng",
        "order": 38,
        "pic": "assets/long.png"
    },
    "h": {
        "ref": "house",
        "und": "h",
        "order": 39,
        "pic": "assets/house.png"
    },
    "l": {
        "ref": "lion",
        "und": "l",
        "order": 40,
        "pic": "assets/lion.jpg"
    },
    "r": {
        "ref": "red",
        "und": "r",
        "order": 41,
        "pic": "assets/red.png"
    },
    "w": {
        "ref": "water",
        "und": "w",
        "order": 42,
        "pic": "assets/water.jpg"
    },
    "j": {
        "ref": "yellow",
        "und": "y",
        "order": 43,
        "pic": "assets/yellow.webp"
    }
}
let table = document.createElement('table')
const trs = []
for (let i = 0; i < 6; i++) {
    trs.push(document.createElement('tr'))
}

let i = 0
let c = 0
for (let v in sounds) {
    if (i === 6
        || i == 13
        || i === 20
        || i === 28
        || i === 36) {
        table.appendChild(trs[c])
        c++
    }
    let td = document.createElement('td');
    function underline(a, b) {
        let answer = ''
        console.log(a, b)
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[0]) {
                let exit = false;
                for (let j = 1; j < b.length; j++) {
                    if (a[i + j] !== b[j]) {
                        exit=true;
                    }
                }
                if (exit) {
                    answer += a[i];
                    continue;

                }
                answer += '<strong>' + b + '</strong>'
                i += b.length
                if (i >= a.length) {
                    break;
                }
            }
            answer += a[i];
        }
        return answer
    }
    td.innerHTML = `${v}<br><img src="${sounds[v].pic}"><br>${underline(sounds[v].ref, sounds[v].und)}`
    td.className = 'row-' + c
    trs[c].appendChild(td)
    i++
}
table.appendChild(trs[c])

document.body.appendChild(table)

