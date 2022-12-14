import React from "react";
import { Waveform } from '@uiball/loaders'

const Loader = () =>{
    return(
        <div className="d-flex justify-content-center align-items-center m-5">
            <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
        </div>
    )
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default Loader;
