import Form from "./Form";
import Header from "./Header";

const IndexForm = () => {

    document.body.className = "with-nav radial-bg flex-center";

    return (
        <div className="white-plate white-plate--payment">
            <div className="container-fluid">
                <Header/>
                <Form />
            </div>
        </div>
    ); 
};

export default IndexForm;
