import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

const Paths = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="*" element={<NotFound />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/pergunta" element={<Pergunta />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
    
}
 
export default Paths;


/* const {logged} = useContext(Context);

    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="*" element={<NotFound />}/>
                    {
                        logged && (
                            <>
                                <Route path="/home" element={<Home />}/>
                            </>
                        )
                    }                
                </Routes>
            </BrowserRouter>
        </>
     ); */