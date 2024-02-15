import { Route, Routes } from "react-router-dom";
import ListData from "./ListData";
import FormUser from "./FormUser";
import NotFound from "./NotFound";
import NavBar from "./NavBar";


const ListCrud = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ListData />} />
                <Route path="/nuevo" element={<FormUser />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default ListCrud
