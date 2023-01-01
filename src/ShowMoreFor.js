import { useState } from "react";
import {dataFor} from "./dataFor";

function ShowMoreFor (){

    const [showMoreFor, setShowMoreFor]=useState(false);

    return (<div className="showMore">
        <p>{showMoreFor ? dataFor[0].textFor : dataFor[0].textFor.substring(0, 100)+"..."}
        <button className="btnShowMore" onClick={()=> setShowMoreFor(!showMoreFor)}>{showMoreFor ? "Читать меньше" : "Читать далее"}</button>
        </p>
        </div>
    )
}
export default ShowMoreFor;