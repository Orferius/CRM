import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import IndexForm from "../RequestsForm/IndexForm";
import IndexEdit from "../EditPage/IndexEdit";
import IndexTable from "../Table/IndexTable";
import NotFound from "../NotFoundPage/NotFoundPage";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<IndexForm />} />
                <Route path="/edit/:id" element={<IndexEdit />} />
                <Route path="/table" element={<IndexTable />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
