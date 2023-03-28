import buttons from "../../Buttons";
import { TableContext } from "../../IndexTable";
import { useContext } from "react";

const StatusBar = () => {

    const {filterStatuses, filter} = useContext(TableContext);

    const statusButtons = buttons.map((btn)=>{
        const cssClass = filter.status === btn.status ? 'btn btn-light active' : 'btn btn-light';

        return (
            <button 
                className={cssClass}
                data-value={btn.status}
                key={btn.status}
                onClick={filterStatuses} 
                type="button" 
            >
                {btn.name}
            </button>
        )
    });

    return (
        <div className="col">
            <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
                {statusButtons}
            </div>
        </div>
    );
}
 
export default StatusBar;