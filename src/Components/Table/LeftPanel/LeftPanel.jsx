import Header from "./Header";
import Requests from "./Requests";
import User from "./User";

const LeftPanel = () => {
    return (
        <div className="left-panel blue-skin">
            <Header/>
            <User/>
            <Requests/>
        </div>
    );
}
 
export default LeftPanel;