import { useState } from "react";
import {dataTwo} from "./dataTwo";

function ShowMoreTwo (){

    const [showMoreTwo, setShowMoreTwo]=useState(false);

    return (<div className="showMore">
        <p>{showMoreTwo ? dataTwo[0].textTwo : dataTwo[0].textTwo.substring(0, 100)+"..."}
        <button className="btnShowMore" onClick={()=> setShowMoreTwo(!showMoreTwo)}>{showMoreTwo ? "Читать меньше" : "Читать далее"}</button>
        </p>
        </div>
    )
}
export default ShowMoreTwo;