import { useState } from "react";
import getRandomRequest from "../../TestData";
import { serverPath } from "../../helpers/variables";
import Button from "./Button";

const Form = () => {
    const [requests, setRequests] = useState(getRandomRequest);
    const [isPending, setIsPending] = useState(false);

    const onChange = (e) => {
        setRequests({ ...requests, [e.target.name]: e.target.value });
    };

    const clearForm = () => {
        setRequests({
            name: "",
            phone: "",
            email: "",
            product: "",
        });
    };

    const testData = () => {
        setRequests(getRandomRequest);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            ...requests,
            status: "new",
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        };
        setIsPending(true);

        fetch(serverPath, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request),
        }).then(() => {
            clearForm();
            setIsPending(false);
            testData();
        });
    };

    return (
        <form onSubmit={handleSubmit} id="form" method="POST" action="">
            <label>Ваши данные:</label>
            <div className="form-group">
                <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="on"
                    className="form-control"
                    placeholder="Имя и Фамилия"
                    required
                    value={requests.name}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    autoComplete="on"
                    className="form-control"
                    placeholder="Телефон"
                    value={requests.phone}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="on"
                    className="form-control"
                    placeholder="Email"
                    required
                    value={requests.email}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                <select
                    id="product"
                    name="product"
                    className="form-control"
                    value={requests.product}
                    onChange={onChange}
                >
                    <option value="course-html">Курс по верстке</option>
                    <option value="course-js">Курс по JavaScript</option>
                    <option value="course-vue">Курс по VUE JS</option>
                    <option value="course-php">Курс по PHP</option>
                    <option value="course-wordpress">Курс по WordPress</option>
                </select>
            </div>

            {!isPending && <Button type="submit" title="Оформить заявку" />}
            {isPending && (<Button type="button" title="Отправление заявки..." />)}
        </form>
    );
};

export default Form;
