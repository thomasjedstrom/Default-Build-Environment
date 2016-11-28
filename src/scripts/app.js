// require('../../node_modules/bootstrap/dist/css/bootstrap.css')

// import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// import jquery from 'jquery';
// import bootstrap from 'bootstrap';
import '../stylesheets/style.scss';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
