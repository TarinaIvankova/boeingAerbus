import vadim from './Vadim.png';
import aleksey from './Aleksey.png';
import alina from './Alina.png';
import stas from './Stas.png';
import oblako from './oblako.png';

function Instructor (){
    return (<div id="instructors">
 <div>
        <p className="PAvia">Наши инструктора</p>
   </div>
<div className='photo'>
<img className='vadim' src={vadim} width="280px"  alt="vadim"/>
<img className='oblako' src={oblako} width="150px" height="60px" alt="oblako"/>
<img className='vadim' src={aleksey} width="280px"  alt="aleksey"/>
<img className='alina' src={alina} width="280px"  alt="alina"/>
<img className='oblako2' src={oblako} width="150px" height="60px" alt="oblako"/>
<img className='vadim' src={stas} width="280px"  alt="stas"/>
</div>

    </div>
    )
}
export default Instructor;