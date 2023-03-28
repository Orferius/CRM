import Header from "./Header";
import Request from "./Request/Request";

const IndexEdit = () => {

    document.body.className = "with-nav";

    return (
        <div className="form-wrapper">
            <div className="container-fluid">
                <Header/>
                <Request/>
            </div>
        </div>
    );
}
 
export default IndexEdit;