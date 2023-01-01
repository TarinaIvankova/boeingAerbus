import oblako from './oblako.png';
import father from './Group father.png';

function Price (){
    return (
        <div id="price">
        <p className="PAvia">Наши цены</p>
         <img src={oblako} width="200px" height="75px" alt="oblako"/>
         <img className='pricePhoto' src={father} width="80%" alt="aviaFather"/>
         </div>
    )
}
export default Price;