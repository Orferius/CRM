const NotFound = () => {

    document.body.className = "with-nav";

    return (
        <div className="content">
            <h1 className="error">404</h1>
            <p className="not-found">Страница не найдена</p>
        </div>
    );
}
 
export default NotFound;