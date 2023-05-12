console.log("test")

window.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("myInput");
    let tagInput = document.getElementById("tagInput");

    // Retrieve the value of the input when a button is clicked
    document.getElementById("myButton").addEventListener("click", function () {
        var inputValue = input.value;
        var tag = tagInput.value || tagInput.placeholder;
        var arrayOfCommands = [];
        var height = -0.3;

        document.getElementById("change").innerHTML = tag;

        inputValue.split("','").reverse().forEach(function (line) {
            let string = `{'id':'command_block_minecart','Command':'summon minecraft:armor_stand ~ ~${height} ~ {CustomName:"${line.replace(/"/g, `\\\\"`)}",Invulnerable:1b,NoGravity:1b,Invisible:1b,CustomNameVisible:1b,Tags:["${tag}"]}'}`;
            console.log(line)
            arrayOfCommands.push(string);
            height = Math.round((height+0.3)*10)/10;;
        });
        document.getElementById("output").innerHTML = `/summon falling_block ~ ~.5 ~ {Time:1,BlockState:{Name:redstone_block},Passengers:[{id:armor_stand,Health:0,Passengers:[{id:falling_block,Time:1,BlockState:{Name:activator_rail},Passengers:[{id:command_block_minecart,Command:'gamerule commandBlockOutput false'},${arrayOfCommands.join(",")},{ id: command_block_minecart, Command: 'setblock ~ ~1 ~ command_block{auto:1,Command:"fill ~ ~ ~ ~ ~-3 ~ air"}' },{ id: command_block_minecart, Command: 'kill @e[type=command_block_minecart,distance=..1]'}]}]}]}`
    });

    document.getElementById("copyButton").addEventListener("click", function () {
        var copyText = document.getElementById("output").innerText;
        navigator.clipboard.writeText(copyText).then(function () {
            console.log("Text copied to clipboard");
        }, function (err) {
            console.error("Could not copy text: ", err);
        });
    });
});