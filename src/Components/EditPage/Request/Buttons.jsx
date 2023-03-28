const Buttons = ({ type, title, deleteRequest, handleSubmit }) => {
    const btn = (
        <button
            type={type}
            className="btn btn-primary"
            onClick={type === "button" ? deleteRequest : handleSubmit}
        >
            {title}
        </button>
    );

    return (
        <div className={type === "button" ? "btn-delete" : "col text-right"}>{btn}</div>
    );
};

export default Buttons;
