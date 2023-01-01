import contact from './contact.png';
import oblako from './oblako.png';

function Contact (){
    return (
        <div className='contactDiv' id="contact">
        <p className="PAvia">Наши контакты <img className='oblako3' src={oblako} width="150px" height="60px" alt="oblako"/></p>
        <img className='adres' src={contact} width="100%"  alt="karta"/>
        <div className='footer'>
        <p className='downsite'>Сайт создан исключительно в учебных целях, все фотографии взяты в открытых источниках в интернете и не имеют ничего общего с реальным магазином.</p>
        <p className='downsite'>Created on React 2022</p>
        <p className='downsite'>Ivankova.Tarina@gmail.com</p>
        </div>
        </div>
    )
}
export default Contact;