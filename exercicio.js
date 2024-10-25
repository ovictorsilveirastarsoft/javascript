let n=10
console.log(n)

n++

console.log(n)

console.log (n,n)

console.log (n,n,n,n,n,n,n)

let num=11
let res=num%2


if (res==0){
    console.log("Par")
}else{
    console.log("Impar")
}

//TERNARIO
console.log("\ ")
console.log("TERNARIO")

res=(!num%2 ? "Par" : "Impar")
console.log("ternario" , res)


let num1 = 1
let num2 = 1
res=(num1 === num2 ? "Verdadeiro" : "falso")
console.log(res)


//TYPE OF ele retorna o tipo da variavel
console.log("\ ")
console.log("TYPE OF")

let v1 = 10
let v2 = "10"
let v3 = v1 === v2
let v4 = {nome:"Victor"}

console.log("Valor: " + v1 +" - Tipo: "+ typeof(v1))
console.log("Valor: " + v2 +" - Tipo: "+ typeof(v2))
console.log("Valor: " + v3 +" - Tipo: "+ typeof(v3))
console.log("Valor: " + v4 +" - Tipo: "+ typeof(v4))

//Operador Spread
console.log("\ ")
console.log("Spread")

let n1 = [10, 20, 30]
let n2 = [ 11,22,33,44,55]
let n3 = [...n1]
const jogador1 = { nome: "Bruno", energia:100, vidas:3, magia:150} 
const jogador2 = { nome: "Bruno", energia:100, vidas:3, velocidade:150} 
const jogador3 = { ...jogador1,...jogador2} 

const soma =(v1,v2,v3) => {
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(n1)
console.log(n2)
console.log(n3)

console.log(jogador3)

console.log(soma(...valores))


// const objs=document.getElementsByTagName("div")
// const objs1=[...document.getElementsByTagName("div")]

// console.log(objs)
// console.log("teste" = objs1)



// IF E IF ELSE
console.log("\ ")
console.log("IF e IF ELSE")

//num = 11

if(num > 10){
    console.log("Numeral maior que 10")
}else if(num > 5 && num <20){
    console.log("Numeral esta entre 6 e 20")
}else{
    console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa")


// SWITCH CASE
console.log("\ ")
console.log("SWITCH CASE")

let colocacao= 10

switch(colocacao){
    case 1:
        console.log ("Primeiro Lugar")
        break
    case 2:
        console.log ("Segundo Lugar")
        break
    case 3:
        console.log ("Terceiro Lugar")
        break
    default:
        console.log ("Não subiu no podium")
        break
}

// LOOP FOR
console.log("\ ")
console.log("LOOP FOR")

console.log("Inicio do Programa")

for(let i=0; i < 10; i++){
    console.log("Processo Programa - valor do i: " + i)
}

console.log("Fim do Programa")

// LOOP FOR IN AND FOR OF
console.log("\ ")
console.log("LOOP FORIN AND FOROF")
let numFor=[10,20,30,40,50]

for(n in numFor){
    console.log("VALOR DE N: ", n)
}

    for (let i=0;i<numFor.length;i++){
        console.log("VALOR DE I: ", numFor[i])
}

for(n of numFor){
    console.log("VALOR DE N: ", n)
}

// LOOP WHILE
console.log("\ ")
console.log("LOOP WHILE")

let n4=0

while(n4<10){
    console.log(n4)
    n4++
}
let n5=5
let fat=1
while(n5>=1){
    console.log(fat)
    fat*=n5
    n5--
}
console.log(fat)

// LOOP WHILE AND DO WHILE
console.log("\ ")
console.log("LOOP WHILE AND DO WHILE")

let n6=10 
do{
    console.log("teste")
}while(n6<10)

console.log("Fim do programa")


// LOOP BREAK AND CONTINUE
console.log("\ ")
console.log("LOOP BREAK AND CONTINUE")

let n7=0
// let max = 1000

// while (n7<max){
//     console.log ("valor de N7: " + n7 )
//     if(n7>10){
//         console.log(n7)
//         break
//     }
//     n7++
// }
// console.log("Fim do programa")

let n8=0
let pares=0
let max = 1000

for (let i=n8;i<max;i++){
    console.log("Valor de N8: " +n8)
    if(i%2!=0){
         continue
    }
    pares++
}
console.log("quantidade de pares: "+ pares)
console.log("Fim do programa")

// FUNÇOES

console.log("\ ")
console.log("FUNÇOES")

function soma2_10(){
    let n1=2
    let n2=10
    let soma=n1+n2
    console.log("resultado da soma: "+ soma)
}

for(let i=0;i<10;i++){
    soma2_10()
}

// FUNÇOES com retorno

console.log("\ ")
console.log("FUNÇOES com retorno")

function canal(){
    return("Funç de CANAL")
    
}

console.log(canal())
console.log(canal())
console.log(canal())

function soma1(){
    let n1=10
    let n2=2
    let res=n1*n2
    if(res%2 == 0)
        return "par"
    else
        return "Impar"

}
let resultadoSoma = soma1()

console.log(resultadoSoma)



// FUNÇOES com parametros

console.log("\ ")
console.log("FUNÇOES com parametros")

function soma_p1(p1 = 0,p2 = 0){
    console.log(p1+p2)
    return p1 + p2
}

console.log(soma_p1(10,10))

soma_p1(10,5)
soma_p1(2020)
soma_p1(5.2)

//FUNÇOES com parametros REST

console.log("\ ")
console.log("FUNÇOES com parametros REST")

function soma_p2(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma_p2(10,5,2,8))

//FUNÇOES  anonima

console.log("\ ")
console.log("FUNÇOES anonima")

const f=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(10,5))


const f1=new Function("v1","v2","v3","return v1+v2+v3")// Funcao construtor anonima

console.log(10,5,15)

//FUNÇOES ARROW FUCTION

console.log("\ ")
console.log("FUNÇOES ARROW FUCTION")

// const soma_p3=function(v1,v2){return v1,v2}
const soma_p3 =(v1,v2)=>{
 return v1+v2
}
console.log(soma(10,5))

const add= n9=>n9+10
console.log("resutado n9: "+add(10))

//FUNÇOES ALINHADAS

console.log("\ ")
console.log("FUNÇOES ALINHADAS")

const soma_p4=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val)
            res+=v
        return res
    }
    return somar(valores)
}
console.log(soma_p4(10,5,15))

//FUNÇOES GERADORA

console.log("\ ")
console.log("FUNÇOES GERADORA")

function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    const nome= yield 'Qual seu nome?'
    const esporte= yield 'Qual seu esporte favorito'

    return "Seu nome é "+ nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Victor').value)
console.log(itp.next('Futebol').value)

function* contator(){
    let i=0
    while(true){
        yield i++
        if(i<5)
            break
    }
}
const icc=contator()
for(let c of icc){
    console.log(c) 
}

//FUNÇOES MAP

console.log("\ ")
console.log("FUNÇOES MAP")


const cursos=["HTML","CSS","JAVASCRIPT","REACT"]

// cursos.map((el,i)=>{
//     console.log("Curso:" + el + " - Posição do curso:" + i)
// })


let c=cursos.map((el,i)=>{
    return el
    console.log("Curso:" + el + " - Posição do curso:" + i)
})
console.log(c)

const converterInt=(e) => parseInt()


