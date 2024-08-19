import Product from '../models/ProductModel';
import Cap from '../images/capsicum-green.png';
import Car from '../images/carrot-orange.png';
import Cau from '../images/cauliflower.png';
import Cor from '../images/coriander-leaves.png';
import Cuc from '../images/cucumber-english.png';
import Pot from '../images/baby-potato.png';
import Tom from '../images/tomato-cherry.png';
import Swe from '../images/sweet-potato.png';
import Str from '../images/strawberry.png';
import Blu from '../images/blueberry.png';
import Avo from '../images/avocado.png';
import Kiw from '../images/kiwi-green.png';

export const products = [
  new Product(1, 'Capsicum - Green (Loose)', 74, Cap, '27%'),
  new Product(2, 'Carrot - Orange (Loose)', 98, Car, '33%'),
  new Product(3, 'Cauliflower', 35, Cau, '27%'),
  new Product(4, 'Coriander Leaves', 92, Cor, '27%'),
  new Product(5, 'Cucumber - English (Loose)', 71, Cuc, '30%'),
  new Product(6, 'Baby Potato (Loose)', 66, Pot, '27%'),
  new Product(7, 'Tomato - Cherry', 350, Tom, '36%'),
  new Product(8, 'Sweet Potato - Organically Grown (Loose)', 122, Swe, '27%'),

  new Product(9, 'Strawberry', 43, Str, '30%'),
  new Product(10, 'Blueberry', 500, Blu, '27%'),
  new Product(11, 'Avocado (Loose)', 196, Avo, '36%'),
  new Product(12, 'Kiwi - Green', 500, Kiw, '27%'),
];