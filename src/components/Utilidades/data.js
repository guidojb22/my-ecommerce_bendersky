const productos = [
    {
        id: "01",
        titulo: "Tenedor 1",
        imagen: "../img/tenedor1.jpg",
        categoria: "tenedor",
        oferta: "no",
        precio: 1000
    },
    {
        id: "02",
        titulo: "Tenedor 2",
        imagen: "../img/tenedor2.jpg",
        categoria: "tenedor",
        oferta: "no",
        precio: 1000
    },
    {
        id: "03",
        titulo: "Tenedor 3",
        imagen: "../img/tenedor3.png",
        categoria: "tenedor",
        oferta: "si",
        precio: 950
    },
    {
        id: "04",
        titulo: "Tenedor 4",
        imagen: "../img/tenedor4.jpg",
        categoria: "tenedor",
        oferta: "no",
        precio: 1000
    },
    {
        id: "05",
        titulo: "Cuchillo 1",
        imagen: "../img/cuchillo1.jpg",
        categoria: "cuchillo",
        oferta: "no",
        precio: 900
    },
    {
        id: "06",
        titulo: "Cuchillo 2",
        imagen: "../img/cuchillo2.png",
        categoria: "cuchillo",
        oferta: "no",
        precio: 900
    },
    {
        id: "07",
        titulo: "Cuchillo 3",
        imagen: "../img/cuchillo3.jpg",
        categoria: "cuchillo",
        oferta: "si",
        precio: 850
    },
    {
        id: "08",
        titulo: "Cuchillo 4",
        imagen: "../img/cuchillo4.jpeg",
        categoria: "cuchillo",
        oferta: "no",
        precio: 900
    },
    {
        id: "09",
        titulo: "Cuchara 1",
        imagen: "../img/cuchara1.jpg",
        categoria: "cuchara",
        oferta: "no",
        precio: 800
    },
    {
        id: "10",
        titulo: "Cuchara 2",
        imagen: "../img/cuchara2.png",
        categoria: "cuchara",
        oferta: "no",
        precio: 800
    },
    {
        id: "11",
        titulo: "Cuchara 3",
        imagen: "../img/cuchara3.jpg",
        categoria: "cuchara",
        oferta: "si",
        precio: 750
    },
    {
        id: "12",
        titulo: "Cuchara 4",
        imagen: "../img/cuchara4.webp",
        categoria: "cuchara",
        oferta: "no",
        precio: 800
    },
    {
        id: "13",
        titulo: "Cucharita 1",
        imagen: "../img/cucharita1.png",
        categoria: "cucharita",
        oferta: "no",
        precio: 500
    },
    {
        id: "14",
        titulo: "Cucharita 2",
        imagen: "../img/cucharita2.jpg",
        categoria: "cucharita",
        oferta: "no",
        precio: 500
    },
    {
        id: "15",
        titulo: "Cucharita 3",
        imagen: "../img/cucharita3.png",
        categoria: "cucharita",
        oferta: "si",
        precio: 450
    },
    {
        id: "16",
        titulo: "Cucharita 4",
        imagen: "../img/cucharita4.jpg",
        categoria: "cucharita",
        oferta: "no",
        precio: 500
    }
]

const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos