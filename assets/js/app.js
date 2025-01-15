// assets/app.js

import { films } from '../data/data.js';
import { createCards } from './methods.js';

// Ensure the paths are correct and the files exist

// Seleccionar el contenedor donde se mostrarán las tarjetas
const containerfilms = document.getElementById('cardContainer');

// Llamar a la función para crear y mostrar las tarjetas
createCards(films, containerfilms);

