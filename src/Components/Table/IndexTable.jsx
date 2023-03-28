import { useEffect, useState, createContext } from "react";
import { serverPath } from "../../helpers/variables";
import LeftPanel from "./LeftPanel/LeftPanel";
import MainTable from "./MainTable/MainTable";

export const TableContext = createContext(null);

const IndexTable = () => {
    document.body.className = "with-nav body--dashboard";

    const [requests, setRequests] = useState([]);
    const [newRequests, setNewRequests] = useState([]);
    const [filter, setFilter] = useState({ products: "all", status: "all" });

    useEffect(() => {

        fetch(`${serverPath}?status=new`)
            .then((res) => res.json())
            .then((request) => setNewRequests(request));

        fetch(
            `${serverPath}?${
                filter.status === "all" ? "" : `status=${filter.status}&`
            }${filter.products === "all" ? "" : `product=${filter.products}`}`
        )
            .then((res) => res.json())
            .then((request) => setRequests(request));
    }, [filter]);

    const filterProducts = (e) => {
        setFilter({ products: e.target.value, status: filter.status });
    };

    const filterStatuses = (e) => {
        setFilter({
            products: filter.products,
            status: e.target.dataset.value,
        });
    };

    return (
        <div>
            <TableContext.Provider
                value={{
                    filterStatuses,
                    newRequests,
                    filter,
                    filterProducts,
                    requests
                }}
            >
                <LeftPanel />
                <MainTable/>
            </TableContext.Provider>
        </div>
    );
};

export default IndexTable;
