import { useState } from "react";
import {data} from "./data";

function ShowMore (){

    const [showMore, setShowMore]=useState(false);

    return (<div className="showMore">
        <p>{showMore ? data[0].text : data[0].text.substring(0, 100)+"..."}
        <button className="btnShowMore" onClick={()=> setShowMore(!showMore)}>{showMore ? "Читать меньше" : "Читать далее"}</button>
        </p>
        </div>
    )
}
export default ShowMore;