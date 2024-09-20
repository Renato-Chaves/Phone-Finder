import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Catalog from "./pages/catalog/catalog.jsx";
import Test from "./pages/test/test.jsx";


function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    </BrowserRouter>
}

export default Router;