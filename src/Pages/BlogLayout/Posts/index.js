import { useParams } from "react-router-dom";

const Posts = () => {

    const { id } = useParams();

    return <div>
        Posts
        params: {id}
    </div>
}
export default Posts;