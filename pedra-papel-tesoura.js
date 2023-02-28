const player = process.argv[2]

if(player === "tesoura"){
    console.log("Você escolher tesoura, o bot escolher papel. VOCÊ GANHOU!")
}if (player === "papel"){
    console.log("Você escolher papel, o bot escolher papel. EMPATE!")
}if (player === "pedra"){
    console.log("Você escolher pedra, o bot escolher papel. VOCÊ PERDEU!")
}else{
    console.log("Escolha uma opcção válida")
}