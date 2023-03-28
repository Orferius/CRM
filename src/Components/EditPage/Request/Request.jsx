import Buttons from "./Buttons";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { serverPath } from "../../../helpers/variables";

const Request = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [request, setRequest] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
        product: "",
        status: "",
    });

    // находим заявку по id, переводим ее данные в json строчку, переносим их в состояние
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(serverPath + id, { signal: abortCont.signal })
        .then((res) => {
            if(res.ok !== true){
                throw Error('Could not fetch the data from this resource');
            }
            return res.json();
        })
        .then((request) => setRequest({ ...request }))
        .catch((err)=> {
            if(err.name === "AbortError"){
                console.log("fetch aborted");
            } else {
                console.log(err.message);
            }
        });

        return () => {
            abortCont.abort();
        };
    }, [id]);

    const onChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(serverPath + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request),
        }).then(() => {
            navigate("/table");
        });
    };

    const deleteRequest = () => {
        fetch(serverPath + id, {
            method: "DELETE",
        }).then(() => {
            navigate("/table");
        });
    };

    return (
        <div className="row">
            <div className="col">
                <form id="form" onSubmit={handleSubmit}>
                    <div className="card mb-4">
                        <div className="card-header">Данные о заявке</div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>ID:</strong>
                                </div>
                                <div className="col">
                                    Заявка №
                                    <span id="number">{request.id}</span>
                                </div>
                                <input name="id" type="hidden" id="id" />
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>Дата создания:</strong>
                                </div>
                                <div className="col" id="date">
                                    {request.date} {request.time}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>Продукт:</strong>
                                </div>
                                <div className="col">
                                    <select
                                        id="product"
                                        name="product"
                                        className="custom-select"
                                        value={request.product}
                                        onChange={onChange}
                                    >
                                        <option value="course-html">
                                            Курс по верстке
                                        </option>
                                        <option value="course-js">
                                            Курс по JavaScript
                                        </option>
                                        <option value="course-vue">
                                            Курс по VUE JS
                                        </option>
                                        <option value="course-php">
                                            Курс по PHP
                                        </option>
                                        <option value="course-wordpress">
                                            Курс по WordPress
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>Имя:</strong>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={request.name}
                                        id="name"
                                        name="name"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>Email:</strong>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={request.email}
                                        id="email"
                                        name="email"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>Телефон:</strong>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={request.phone}
                                        id="phone"
                                        name="phone"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <strong>Статус заявки:</strong>
                                </div>
                                <div className="col">
                                    <select
                                        className="custom-select"
                                        id="status"
                                        name="status"
                                        value={request.status}
                                        onChange={onChange}
                                    >
                                        <option value="">Выберите...</option>
                                        <option value="new">Новая</option>
                                        <option value="inwork">В работе</option>
                                        <option value="complete">
                                            Завершена
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between align-items-center">
                        <Buttons
                            type="button"
                            title="Удалить заявку"
                            deleteRequest={deleteRequest}
                        />
                        <Buttons
                            type="submit"
                            title="Сохранить изменения"
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Request;
