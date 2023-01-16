import strelkaNazad from './strelkaNazad.png';
import strelkaVpered from './strelkaVpered.png';
import oblako from './oblako.png';
import {useState} from "react";
import { dataThree } from './dataThree';

function Reviews (){

    const [person, setPerson]=useState(0);
    const { image, name, textThree } = dataThree[person];


    const previousPerson=()=>{
        setPerson((person=>{
            person--;
            if (person<0){
                return dataThree.length-1;
            }
            return person;
        }))
    }
    const nextPerson=()=>{
        setPerson((person=>{
            person++;
            if (person>dataThree.length-1){
                person=0;
            }
            return person;
        }))
    }

    return (<div id="reviews">
        <div>
            <p className="PAvia">Отзывы наших гостей</p>
            <img src={oblako} width="200px" height="75px" alt="oblako"/>
        </div>
       <div className='reviews'>
            <div className='child'>
            <button onClick={previousPerson}><img src={strelkaNazad} width="50px" alt="previous"/></button>
            <div className='reviewsForTel'>
                <div className='photoWomen'>
                <img className='photo' src={image} width="300px" alt="avia"/>
                </div>
                <div className='textReview'>
                <p className='review'>{textThree}</p>
                <p className='review2'>{name}</p>
                </div>
                </div>
                <button onClick={nextPerson}><img src={strelkaVpered} width="50px"  alt="next"/></button>
            </div>
       </div>
       
       
       </div>
    )
}
export default Reviews;