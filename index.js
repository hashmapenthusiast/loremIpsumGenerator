const button = document.querySelector('#lorem')

function makeLorem(paragraphs = 1) {
    let newParagraph = document.createElement('p');
    for (let i = 0; i < 150; i++) {
        newParagraph.textContent += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    document.body.appendChild(newParagraph)
}

button.addEventListener('click', makeLorem)

// {
//     'ref': 'sheep',
//     'und': 'ee'
// },
sounds = {
    "i:": {
        "ref": "sheep",
        "und": "ee",
        "order": 0
    },
    "ɪ": {
        "ref": "ship",
        "und": "i",
        "order": 1
    },
    "ʊ": {
        "ref": "good",
        "und": "oo",
        "order": 2
    },
    "u:": {
        "ref": "shoot",
        "und": "oo",
        "order": 3
    },
    "ɪə": {
        "ref": "here",
        "und": "ere",
        "order": 4
    },
    "eɪ": {
        "ref": "wait",
        "und": "ai",
        "order": 5
    },
    "e": {
        "ref": "bed",
        "und": "e",
        "order": 6
    },
    "ə": {
        "ref": "teacher",
        "und": "er",
        "order": 7
    },
    "ɜ:": {
        "ref": "bird",
        "und": "ir",
        "order": 8
    },
    "ɔ:": {
        "ref": "door",
        "und": "oor",
        "order": 9
    },
    "ʊə": {
        "ref": "tourist",
        "und": "ou",
        "order": 10
    },
    "ɔɪ": {
        "ref": "boy",
        "und": "oy",
        "order": 11
    },
    "əʊ": {
        "ref": "show",
        "und": "ow",
        "order": 12
    },
    "æ": {
        "ref": "cat",
        "und": "a",
        "order": 13
    },
    "ʌ": {
        "ref": "up",
        "und": "u",
        "order": 14
    },
    "ɑ:": {
        "ref": "far",
        "und": "ar",
        "order": 15
    },
    "ɒ": {
        "ref": "on",
        "und": "o",
        "order": 16
    },
    "eə": {
        "ref": "hair",
        "und": "air",
        "order": 17
    },
    "ɑɪ": {
        "ref": "my",
        "und": "y",
        "order": 18
    },
    "ɑʊ": {
        "ref": "cow",
        "und": "ow",
        "order": 19
    },
    "p": {
        "ref": "pea",
        "und": "p",
        "order": 20
    },
    "b": {
        "ref": "boat",
        "und": "b",
        "order": 21
    },
    "t": {
        "ref": "tea",
        "und": "t",
        "order": 22
    },
    "d": {
        "ref": "dog",
        "und": "d",
        "order": 23
    },
    "tʃ": {
        "ref": "cheese",
        "und": "ch",
        "order": 24
    },
    "dʒ": {
        "ref": "June",
        "und": "J",
        "order": 25
    },
    "k": {
        "ref": "car",
        "und": "c",
        "order": 26
    },
    "ɡ": {
        "ref": "go",
        "und": "g",
        "order": 27
    },
    "f": {
        "ref": "fly",
        "und": "f",
        "order": 28
    },
    "v": {
        "ref": "video",
        "und": "v",
        "order": 29
    },
    "θ": {
        "ref": "think",
        "und": "th",
        "order": 30
    },
    "ð": {
        "ref": "this",
        "und": "th",
        "order": 31
    },
    "s": {
        "ref": "see",
        "und": "s",
        "order": 32
    },
    "z": {
        "ref": "zoo",
        "und": "z",
        "order": 33
    },
    "ʃ": {
        "ref": "shall",
        "und": "sh",
        "order": 34
    },
    "ʒ": {
        "ref": "television",
        "und": "s",
        "order": 35
    },
    "m": {
        "ref": "man",
        "und": "m",
        "order": 36
    },
    "n": {
        "ref": "now",
        "und": "n",
        "order": 37
    },
    "ŋ": {
        "ref": "sing",
        "und": "ng",
        "order": 38
    },
    "h": {
        "ref": "hat",
        "und": "h",
        "order": 39
    },
    "l": {
        "ref": "love",
        "und": "l",
        "order": 40
    },
    "r": {
        "ref": "red",
        "und": "r",
        "order": 41
    },
    "w": {
        "ref": "wet",
        "und": "w",
        "order": 42
    },
    "j": {
        "ref": "yes",
        "und": "y",
        "order": 43
    }
}
let table = document.createElement('table')
const trs = []
for (let i = 0; i <6;i++){
    trs.push(document.createElement('tr'))
}
let i = 0
let c=0
for (let v in sounds) {
    if (i===6||i==13||i===20||i===28||i===36){
        table.appendChild(trs[c])
        c++
    }
    let td = document.createElement('td');
    td.innerHTML = v
    td.className = 'row-'+c
    trs[c].appendChild(td)
    i++
}       
 table.appendChild(trs[c])

document.body.appendChild(table)
console.log(sounds)

