import React from "react";
import {useParams} from "react-router-dom";

const CategoryDetails = () => {
    const { id } = useParams();

    return (
        <div>
            Category {id}
        </div>
    )
}

export default CategoryDetails;