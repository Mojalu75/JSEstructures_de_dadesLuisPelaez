
function ex1() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(Math.floor(Math.random() * 100));
    }
    numeros.sort((a, b) => a - b);
    console.log(numeros);
    console.log(numeros[0]);
    console.log(numeros[numeros.length - 1]);
}

ex1();

function ex2() {
    let numeros = [2, 5, 8, 10, 15];
    let copia = [...numeros];
    console.log(copia);
}


ex2();
function ex3() {
    let numeros1 = [1, 2, 3];
    let numeros2 = [2, 3, 4];

    let resultado = [];
    for (let numero of numeros1) {
        if (!resultado.includes(numero)) {
            resultado.push(numero);
        }
    }

    for (let numero of numeros2) {
        if (!resultado.includes(numero)) {
            resultado.push(numero);

        }
    }

    console.log(resultado);
}

ex3();
function ex4() {
    let numeros1 = [1, 2, 3];
    let numeros2 = [2, 3, 4];

    let resultado = [...new Set([...numeros1, ...numeros2])];
    console.log(resultado);
}


ex4();

function ex5() {
    let numeros = [1, 3, 6];
    let resultado = numeros.map(numero => numero ** 3);

    console.log(resultado);
}

ex5();
function ex6() {
    let palabras = ["casa", "manzana", "perro", "banana"];

    let resultado = palabras.filter(palabra => {
        return palabra.split("a").length - 1 > 1;

    });

    console.log(resultado);
}

ex6();

function ex7() {
    let datos = new Map();

    datos.set("nombre", "Luis");
    datos.set(1, 20);
    datos.set(true, "Activo");

    console.log(datos);

}

ex7();

function ex8() {
    let palabra = "radar";
    let cola = [];

    for (let letra of palabra) {
        cola.push(letra);
    }
    let invertida = "";

    while (cola.length > 0) {
        invertida += cola.pop();
    }

    if (palabra === invertida) {
        console.log("Es palíndromo");
    } else {
        console.log("No es palíndromo");
    }
}

ex8();

function ex9() {
    class Pelicula {
        constructor(titulo, descripcion, anyo) {
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.anyo = anyo;
        }
    }

    let pelicula1 = new Pelicula("Avatar", "Ciencia ficción", 2009);

    let pelicula2 = {
        titulo: "Titanic",
        descripcion: "Historia de amor",
        anyo: 1997
    };

    console.log(pelicula1);
    console.log(pelicula2);
}

ex9();

function ex10() {
    let pelicula1 = {
        titulo: "Avatar",
        anyo: 2009
    };

    let pelicula2 = {
        titulo: "Titanic",
        anyo: 1997
    };

    let cola = [];

    cola.push(pelicula1);
    cola.push(pelicula2);

    let antigua = cola[0];

    for (let pelicula of cola) {
        if (pelicula.anyo < antigua.anyo) {
            antigua = pelicula;
        }
    }

    console.log("Película más antigua:", antigua.titulo);
}

ex10();

function ex11() {
    let pelicula1 = {
        titulo: "Avatar",
        anyo: 2009,
        actores: ["Sam Worthington", "Zoe Saldana"]
    };

    let pelicula2 = {
        titulo: "Titanic",
        anyo: 1997,
        actores: ["Leonardo DiCaprio", "Kate Winslet"]
    };

    let cola = [];

    cola.push(pelicula1);
    cola.push(pelicula2);

    for (let pelicula of cola) {
        console.log("Película:", pelicula.titulo);

        for (let actor of pelicula.actores) {
            console.log(actor);
        }
    }
}

ex11();
