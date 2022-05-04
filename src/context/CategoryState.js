import { useEffect, useState } from "react";
import CategoryContext from "./CategoryContext";
// import Data from '../Data';

const CategoryState = (props) => {
    const [active, setActive] = useState("All")
    const [category, setCategory] = useState([]);
    const [allStaticData, setallStaticData] = useState('')
    const currentCategory = (category) => {
        setActive(category);
    }
    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8080/data";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let data = await response.json();
            setallStaticData(data);
        }
        fetchData();
    }, [])

    const fiterData = (categoryName) => {
        var shortedCategory = allStaticData.filter((currentElement) => {
            return currentElement.category === categoryName
        });
        setCategory(shortedCategory);
    }

    return (
        <CategoryContext.Provider value={{ currentCategory, active, fiterData, category }} >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryState;