import ProductsSelection from "./ProductsSelection";
import StatusBar from "./StatusBar";

const Selection = () => {
    return (
        <form action="">
            <div className="row mb-3 justify-content-start">
                <StatusBar/>
                <ProductsSelection/>
            </div>
        </form>
    );
}
 
export default Selection;