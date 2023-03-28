import { TableContext } from "../../IndexTable";
import { useContext } from "react";

const ProductsSelection = () => {

    const {filterProducts} = useContext(TableContext);

    const products = [
        {value: 'all', name: 'Все продукты'},
        {value: 'course-html', name: 'Курс по верстке'},
        {value: 'course-js', name: 'Курс по JavaScript'},
        {value: 'course-vue', name: 'Курс по VUE JS'},
        {value: 'course-php', name: 'Курс по PHP'},
        {value: 'course-wordpress', name: 'Курс по WordPress'}
    ];

    const productsRender = products.map((course)=>{
        return (
            <option value={course.value} key={course.value}>{course.name}</option>
        )
    })

    return (
        <div className="col">
            <select className="custom-select" id="productSelect" onChange={filterProducts}>
                {productsRender}
            </select>
        </div>
    );
}
 
export default ProductsSelection;