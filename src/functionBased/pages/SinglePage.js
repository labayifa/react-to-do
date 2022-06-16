import React from "react"
import {useParams} from "react-router-dom";

const SinglePage = () => {
    console.log(useParams())
    return <div className="main__content">Hello from single page</div>
}

export default SinglePage