let allChar = [];
for (let i = 48; i <= 57; i++) {
    allChar.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
    allChar.push(String.fromCharCode(i));
}
for (let i = 192; i <= 221; i++) {
    allChar.push(String.fromCharCode(i));
}

var r = []
for (let i = 0; i<10; i++) {
    r.push(allChar[Math.floor(Math.random() * allChar.length)]);
}
console.log(r.join(""));