const pizzas = [
  {
    nombre: "Muzzarella",
    id: 1,
    ingredientes: ["Muzzarella", "Oregano", "Aceituna"],
    precio: 1200,
  },
  {
    nombre: "Calabresa",
    id: 2,
    ingredientes: ["Muzzarella", "Longaniza", "Aceituna"],
    precio: 1500,
  },
  {
    nombre: "Especial",
    id: 3,
    ingredientes: ["Muzzarella", "Jamon", "Morron", "Aceituna"],
    precio: 1600,
  },
  {
    nombre: "Napolitana",
    id: 4,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Albahaca",
      "Ajo",
      "Perejil",
      "Aceituna",
    ],
    precio: 1700,
  },
  {
    nombre: "Super Viena",
    id: 5,
    ingredientes: [
      "Muzzarella",
      "Jamon",
      "Salchicha",
      "Papas Fritas",
      "Huevos Fritos",
    ],
    precio: 2000,
  },
  {
    nombre: "Fugazzeta",
    id: 6,
    ingredientes: ["Muzzarella", "Cebolla", "Oregano", "Aceituna"],
    precio: 1500,
  },
];

// a) Las pizzas que tengan un id impar

const idImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});

idImpares.forEach((pizza) => {
  //   console.log(`La Pizza ${pizza.nombre} tiene id impar`);
});

// b) ¿Hay alguna pizza que valga menos de $600?

const pizzaMenor = pizzas.some((pizza) => {
  return pizza.precio < 600;
});
//   ? console.log(`Hay Pizzas con precio menor a $600`)
//   : console.log(`No hay Pizzas con precio menor a $600`);

// c) El nombre de cada pizza con su respectivo precio.

const everyPizza = pizzas.forEach((pizza) => {
  //   console.log(`La Pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`);
});

// d) Todos los ingredientes de cada Pizza

const ingredientesDeCadaPizza = pizzas.map((pizza) => {
  console
    .log
    // `La Pizza ${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes}`
    ();
});

pizzas.forEach((pizza) => {
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
});
