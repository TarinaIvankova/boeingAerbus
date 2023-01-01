import aviatrenagor from "./Group 3.png";
import domodedovo from './domodedovo.png';
import dubay from './dubay.png';

import ShowMore from "./ShowMore";
import ShowMoreTwo from "./ShowMoreTwo";

import boeingAirbus from './BoeingAirbus.png';
import frame from './frame.png';
import Price from "./Price";
import ShowMoreFor from "./ShowMoreFor";

function Avia (){
    return (
        <div >
        <div >
             <p className="PAvia">Что такое авиатренажер?</p>
             <div className="aviatrenagor">
             <img className="aviatrenagorPhoto" src={aviatrenagor} width="700px" alt="avia"/>
            <ShowMoreFor/>
             </div>
        </div>
         <div id="where">
         <p className="PAvia">Куда можно летать?</p>
         <div className="where">
            <div>
                <img className="whereDom" src={domodedovo} width="500px" alt="avia"/>
                <ShowMore/>
            </div>
            <div>
                <img className="whereDom" src={dubay} width="500px" alt="avia"/>
                <ShowMoreTwo/>
            </div>
         </div>
         <Price/>
    </div>
    <div >
        <p className="PAvia">Чем отличается BOEING ОТ AIRBUS?</p>
    </div>
        <div>
         <img src={boeingAirbus} width="100%" alt="avia"/>
         </div>
         <div className="frame">
            <img className="framePhoto" src={frame} width="80%" height="200px" alt="avia"/>
        </div>
         
         <div className="differences">
            <div className="airbus">
                <h4>хвост "ровный" с обеих сторон</h4>
                <h4>круглая форма носа</h4>
                <h4>выше клиренс</h4>
                <h4>может работать под контролем компьютера</h4>
                <h4>боковые стёкла кабины прямые</h4>
            </div>
            <div className="airbus2">
                <h4>- 1 -</h4>
                <h4>- 2 -</h4>
                <h4>- 3 -</h4>
                <h4>- 4 -</h4>
                <h4>- 5 -</h4>
            </div>
            <div className="airbus">
                <h4>хвост-форкиль, дающий характерный "излом"</h4>
                <h4>острая форма носа</h4>
                <h4>ниже клиренс</h4>
                <h4>пилотируется только человеком</h4>
                <h4>боковые стёкла угловатые внизу</h4>
            </div>
         </div>
</div>
       
    )
}
export default Avia;