import React, {CSSProperties} from "react";

interface InputI {
    name?: string;
    placeholder?: string;
    setValue: (inpVal:string) => void;
    value: string;
    customStyles?: CSSProperties;
    textStyle?: CSSProperties;
    type:string;
    error?:boolean
    messageError?:string
}

const Input = ({name, placeholder,setValue,value,customStyles,textStyle,type,error,messageError}: InputI) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div style={{
            width:'100%',
            height:'auto',
            display: "flex",
            flexFlow:'column',

        }}>
            <label style={textStyle}>{placeholder}</label>
            <input style={customStyles} type={type} name={name} value={value} onChange={handleChange}/>
            {error&&
                <span style={{color:'red', fontSize:11,marginLeft:15,marginTop:2}}>
                    {messageError}
                </span>
               }
        </div>

    )
}
export default Input;
