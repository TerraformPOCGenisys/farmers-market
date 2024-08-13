import Product from '../models/ProductModel';
import Cap from '../images/capsicum-green.png';
import Car from '../images/carrot-orange.png';
import Cau from '../images/cauliflower.png';
import Cor from '../images/coriander-leaves.png';

export const products = [
  new Product(1, 'Capsicum - Green (Loose)', 74, Cap, '27%'),
  new Product(2, 'Carrot - Orange (Loose)', 98, Car, '33%'),
  new Product(3, 'Cauliflower', 35, Cau, '27%'),
  new Product(4, 'Coriander Leaves', 92, Cor, '27%'),
];