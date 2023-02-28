const playerOption = process.argv[2]
const playerNumber = process.argv[3]

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

const botNumber = getRndInteger(0, 10)

const sum = botNumber + playerNumber

if(sum % 2 === 0 && playerOption === "par"){
    console.log(`Você escolheu ${playerOption} e o bot escolheu par. O resultado foi ${sum}. Você ganhou!`)
}if(sum % 2 !== 0 && playerOption === "impar"){
    console.log(`Você escolheu ${playerOption} e o bot escolheu impar. O resultado foi ${sum}. Você ganhou!`)
}if(sum % 2 !== 0 && playerOption === "par"){
    console.log(`Você escolheu ${playerOption} e o bot escolheu par. O resultado foi ${sum}. Você perdeu!`)
}if(sum % 2 === 0 && playerOption === "impar"){
    console.log(`Você escolheu ${playerOption} e o bot escolheu impar. O resultado foi ${sum}. Você perdeu!`)
}
