import React from "react";
import './Button.css'
interface ButtonI {
    name?:string
    placeholder?:string,
    clickHandler: (e:  React.MouseEvent<HTMLButtonElement>) => void;
    selected?:string,
    isDisable?:boolean,
    require?:boolean
}


const Button = ({name,clickHandler,placeholder,selected="",isDisable=false,require=false}:ButtonI) => {
    return(
        <>
            {
                require ?
                    <button
                    disabled={!isDisable}
                className={!isDisable ?
                'ButtonDisabled'
                :
                selected === name ?"ButtonActive" :'Button' } onClick={clickHandler} name={name}>{placeholder}</button>
                :
                <button className={selected === name ?"ButtonActive" :'Button' } onClick={clickHandler} name={name}>{placeholder}</button>


            }
        </>



    )
}
export default Button;
