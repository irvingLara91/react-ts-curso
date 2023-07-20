import React from "react";
import './Button.css'
interface ButtonI {
    name?:string
    placeholder?:string,
    clickHandler: (e:  React.MouseEvent<HTMLButtonElement>) => void;
    selected?:string
}


const Button = ({name,clickHandler,placeholder,selected=""}:ButtonI) => {


    return(
        <button className={selected === name ?"ButtonActive" :'Button'} onClick={clickHandler} name={name}>{placeholder}</button>
    )
}
export default Button;
