import RequestsTable from "./RequestsTable/RequestsTable";
import Selection from "./SelectionButtons/Selection";

const MainTable = () => {
    return (
        <div className="main-wrapper">
            <div className="container-fluid">
                <div className="admin-heading-1">Все заявки</div>
                <Selection/>
                <RequestsTable/>
            </div>
        </div>
    );
}
 
export default MainTable;