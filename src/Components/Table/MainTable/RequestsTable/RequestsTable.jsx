import { Link } from "react-router-dom";
import { TableContext } from "../../IndexTable";
import { useContext } from "react";

const RequestsTable = () => {

    const {requests} = useContext(TableContext);

    const badges = {
        new: "badge-danger",
        inwork: "badge-warning",
        complete: "badge-success",
    };

    const products = {
        "course-html": "Курс по верстке",
        "course-js": "Курс по JavaScript",
        "course-vue": "Курс по VUE JS",
        "course-php": "Курс по PHP",
        "course-wordpress": "Курс по WordPress",
    };

    const statuses = {
        new: "Новая",
        inwork: "В работе",
        complete: "Завершена",
    };

    const requestsRow = () => {
        return (requests.map((request) => {
            return (
                <tr key={request.id}>
                <th scope="row">{request.id}</th>
                <td>{request.date}</td>
                <td>{products[request.product]}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>
                    <div className={`badge badge-pill ${badges[request.status]}`}>{statuses[request.status]}</div>
                </td>
                <td>
                    <Link to={`/edit/${request.id}`}>Редактировать</Link>
                </td>
            </tr>
            )
        }))
    }

    return (
        <table className="table fs-14">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>дата</th>
                    <th>продукт</th>
                    <th>имя</th>
                    <th>email</th>
                    <th>телефон</th>
                    <th>статус</th>
                    <th></th>
                </tr>
            </thead>

            <tbody id="tbody">
                {requests && requestsRow()}
            </tbody>
        </table>
    );
}
 
export default RequestsTable;