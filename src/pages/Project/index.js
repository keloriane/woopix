import React, {useEffect, useState} from "react";
import {STRAPI_URL} from "../Helpers";

const Project = () => {

        const [project , setProject] = useState([])
        const [image , setImage] = useState("")
    useEffect(()=>{
        const id = window.location.pathname.split('/')[2]

        fetch(`${STRAPI_URL}/sliders/${id}`)
            .then(response => response.json())
            .then((dataResponse) => {

                /*return null*/
                return setProject(dataResponse)


            })
    },[])
    console.log(project.image_big?.url)

    return (
        <div>
            <p>{project.title}</p>
            <img src={`${STRAPI_URL}${project.image_big?.url}`} alt=""/>


        </div>
    )
}
export default Project;