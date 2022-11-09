import { useParams } from "react-router-dom";


const Posts = () => {

    const params = useParams();
    console.log("params:", params)
    return <div>
        Posts
        parametre: {params}
    </div>
}

export default Posts;