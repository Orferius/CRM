const Button = ({ type, title }) => {
    return (
        <button
            disabled={type === 'button' ? true : false}
            type={type}
            className="btn btn-lg btn-primary btn-block"
        >
            {title}
        </button>
    );
};

export default Button;
