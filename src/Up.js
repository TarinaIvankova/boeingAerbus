import one from './Group 1.png';
import men from './Group men.png';
import avia from './Group 2.png';
import oblako from './oblako.png';


function Up (){

    return (<div id="home">
<div className='component'>
    <div className='lozung'>
        <h1>ВЫ</h1>
        <h3>ПРОБОВАЛИ</h3>
        <h2>УПРАВЛЯТЬ</h2>
        <h2 className='word'>БОИНГОМ?</h2>
        <img className='sertif' src={one} width="300px" alt="sertif"/>
    </div>
    <div className='oblaka'>
    <img className='oblako3' src={oblako} width="200px" height="75px" alt="oblako"/>
    <img className='oblako4' src={oblako} width="150px" height="60px" alt="oblako"/>
    </div>
    <div className='men'>
      <img  className='menPhoto' src={men} width="900px" alt="men"/>
    </div>
</div>
<div id='avia'>
<img className='avia' src={avia} width="70%" alt="avia"/>
</div>
</div>
    )
}

export default Up;