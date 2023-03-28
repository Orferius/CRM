import { Link } from "react-router-dom";
import buttons from "../Buttons";
import { TableContext } from "../IndexTable";
import { useContext } from "react";

const Requests = () => {

    const {filterStatuses, newRequests, filter} = useContext(TableContext);

    const leftButtons = buttons.map((btn)=>{
        const cssClass = filter.status === btn.status ? 'active' : '';
        const badge = <div className="badge" id="badge-new">{newRequests.length}</div>;

        return (
            <Link 
                data-value={btn.status}
                data-role="left-status"
                to="#"
                className={cssClass}
                key={btn.status}
                onClick={filterStatuses} 
            >
                {btn.name}
                {btn.status === 'new' && newRequests.length > 0 ? badge : ''}
            </Link>
        )
    });

    return (
        <div className="left-panel__navigation">
            <div className="left-panel__navigation-title">Заявки</div>
            <ul>
                <li>{leftButtons}</li>
            </ul>
        </div>
    );
}
 
export default Requests;