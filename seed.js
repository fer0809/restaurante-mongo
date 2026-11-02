require('dotenv').config();
const mongoose = require('mongoose');
const Plato = require('./src/models/Plato');

const platos = [
  { nombre:'Ensalada César', descripcion:'Lechuga, crutones y parmesano', ingredientes:['lechuga','crutones','parmesano','aderezo césar'], precio:1200, aptoCeliacos:false, aptoVeganos:false, aptoDiabeticos:true, calorias:350, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7D0lxCz6bCyE29xRRogtNmDSlxharrgPaBuWgTI8Gw&s=10' },
  { nombre:'Pizza Margherita', descripcion:'Pizza clásica con tomate y mozzarella', ingredientes:['harina','tomate','mozzarella','albahaca'], precio:1800, aptoCeliacos:false, aptoVeganos:false, aptoDiabeticos:false, calorias:800, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykYBAQJgRsMKpu3hdSNtmOFu9NXKxq2Ndkb0hI_1daw&s=10' },
  { nombre:'Sopa de verduras', descripcion:'Sopa light de verduras', ingredientes:['zanahoria','papa','apio','caldo'], precio:900, aptoCeliacos:true, aptoVeganos:true, aptoDiabeticos:true, calorias:180, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BE3OVfR0Pgp59DSPj_c7Q_VR7JHCzj13MBdcgTYx_g&s=10' },
  { nombre:'Hamburguesa vegana', descripcion:'Hamburguesa de lentejas', ingredientes:['lentejas','pan integral','lechuga','tomate'], precio:1500, aptoCeliacos:false, aptoVeganos:true, aptoDiabeticos:true, calorias:520, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcm87w_aEOh8d0s95pm-AGM-HZFQuE8avm8v0GElDvw&s=10' },
  { nombre:'Brownie sin gluten', descripcion:'Brownie apto celiacos', ingredientes:['harina de arroz','cacao','azúcar','manteca'], precio:700, aptoCeliacos:true, aptoVeganos:false, aptoDiabeticos:false, calorias:420, imagen:'https://danzadefogones.com/wp-content/uploads/2014/06/Brownie-vegano-danzadefogones.com_.jpg' },
  { nombre:'Risotto de hongos', descripcion:'Risotto cremoso', ingredientes:['arroz','hongos','parmesano','caldo'], precio:2000, aptoCeliacos:true, aptoVeganos:false, aptoDiabeticos:false, calorias:650, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1YEZWcPB20DuvlYGcIe9njSXu7GfdQWFmcuqGDDc1Q&s=10' },
  { nombre:'Tarta de frutas', descripcion:'Tarta light', ingredientes:['frutas','harina integral','stevia'], precio:1100, aptoCeliacos:false, aptoVeganos:false, aptoDiabeticos:true, calorias:290, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujseyQGdIYUNbntZNLoSggdSziLFGddHReNc4XqGYSg&s=10' },
  { nombre:'Wrap de pollo', descripcion:'Wrap con pollo grillado', ingredientes:['pollo','tortilla','lechuga','mayonesa'], precio:1300, aptoCeliacos:false, aptoVeganos:false, aptoDiabeticos:true, calorias:480, imagen:'https://example.com/wrap.jpg' },
  { nombre:'Bowl de quinoa', descripcion:'Bowl vegano de quinoa', ingredientes:['quinoa','garbanzos','espinaca','tomate'], precio:1600, aptoCeliacos:true, aptoVeganos:true, aptoDiabeticos:true, calorias:410, imagen:'https://example.com/bowl.jpg' },
  { nombre:'Helado artesanal', descripcion:'Helado de vainilla', ingredientes:['leche','crema','vainilla','azúcar'], precio:800, aptoCeliacos:true, aptoVeganos:false, aptoDiabeticos:false, calorias:260, imagen:'https://example.com/helado.jpg' }
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/restaurante');
  await Plato.deleteMany({});
  await Plato.insertMany(platos);
  console.log('Seed OK');
  await mongoose.disconnect();
})();
