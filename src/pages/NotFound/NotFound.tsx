import AuthTemplate from "../../templates/AuthTemplate.tsx";


const NotFound = () => {


    return(
        <AuthTemplate>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'350px'}}>
            <span style={{color:'white',fontSize:'30px',textAlign:'center'}}>
                       404 Página no encontrada...
            </span>
        </div>
        </AuthTemplate>
    )
}

export default NotFound
