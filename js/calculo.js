

function Triangulo() {

    let base = parseFloat(document.querySelector('#Base').value)
    let altura = parseFloat(document.querySelector('#Altura').value)
    let resultado = base * altura / 2

    alert(`O Valor da Área do Triangulo é de : ${resultado.toFixed(2)}`);
}

function Trapezoide() {

    let trapezoideMaior = parseFloat(document.querySelector('#Base').value)
    let trapezoideMenor = parseFloat(document.querySelector('#Altura').value)
    let AlturaTrapezoide = parseFloat(document.querySelector('#Altura').value)
    let resultado = (trapezoideMaior + trapezoideMenor) * AlturaTrapezoide / 2

    alert(`O Valor da Área do Trapezoide é de : ${resultado.toFixed(2)}`);
}

function Retangulo() {

    let base = parseFloat(document.querySelector('#Base').value)
    let altura = parseFloat(document.querySelector('#Altura').value)
    let resultado = base * altura

    alert(`O Valor da Área do Retangulo é de : ${resultado.toFixed(2)}`);
}

function Quadrado() {

    let Lado = parseFloat(document.querySelector('#Base').value)
    let resultado = Lado * Lado

    alert(`O Valor da Área do Quadrado é de : ${resultado.toFixed(2)}`);
}

function Poligono() {

    let Perimetro = parseFloat(document.querySelector('#metade').value)
    let apotema = parseFloat(document.querySelector('#apotema').value)
    let resultado = Perimetro / 2 * apotema

    alert(`O Valor da Área do Poligono é de : ${resultado.toFixed(2)}`);
}
function Piramide() {

    let BaseMaior = parseFloat(document.querySelector('#BaseMaior').value)
    let BaseMenor = parseFloat(document.querySelector('#BaseMenor').value)
    let AlturaLateral = parseFloat(document.querySelector('#Lateral').value)
    let resultado = BaseMaior + BaseMenor + AlturaLateral

    alert(`O Valor da Área da Piramide é de : ${resultado.toFixed(2)}`);
}
function Circulo() {

    let valordePi = parseFloat(document.querySelector('#Pi').value)
    let valorRaio = parseFloat(document.querySelector('#Raio').value)
    let valorRaio2 = valorRaio * valorRaio
    let resultado = valordePi * valorRaio2

    alert(`O Valor da Área do Circulo é de : ${resultado.toFixed(2)}`);
}
function SetorCircular() {

    let AnguloSetor = parseFloat(document.querySelector('#Angulo').value)
    let Raioquadrado = parseFloat(document.querySelector('#RaioQuadrado').value)
    let resultado = AnguloSetor / 360 * Raioquadrado

    alert(`O Valor da Área do Setor Circular é de : ${resultado.toFixed(2)}`);
}

