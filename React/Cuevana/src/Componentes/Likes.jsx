import React, {useState} from "react";

const Likes = () => {

    //Estado que almacena el número de likes
    const  [likeActual, setLike] = useState(0);

    const like = () => {
        return setLike(likeActual + 1);
    };

    //Estado que almacena el número de dislikes
    const  [dislikeActual, setDislike] = useState(0);

    const dislike = () => {
        return setDislike(dislikeActual + 1);
    };

    return (
        <>
        <div className="contador-likes">
            <h2>Contador de Likes</h2>
            <div className="caja">
                <p>Likes: <strong>{likeActual}</strong></p>
                <button onClick={like}>Dar like</button>
            </div>

            <div className="caja">
                <p>Dislikes: <strong>{dislikeActual}</strong></p>
                <button onClick={dislike}>Dar dislike</button>
            </div>
        </div>
        </>
    );

};

export default Likes;