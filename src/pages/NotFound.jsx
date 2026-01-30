import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
            <h2>ERROR: Pagina não encontrada</h2>
            
            <Link to="/">
                <button
                style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                }}
                >
                    Voltar para Home
                </button>
            </Link>
        </>
     );
}
 
export default NotFound;