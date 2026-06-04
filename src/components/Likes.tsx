import { useState } from "react";

const Likes = () => {
    const [likes, setLikes] = useState(7)

    const handleClick = () => {
        setLikes(prev => prev + 1)
    }

    return (
        <div className="Likes">
            <p>{likes} peoples like this review</p>
            <button onClick={handleClick}>Like</button>
        </div>
    )
}

export default Likes