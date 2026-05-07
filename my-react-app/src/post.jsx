export default function Post({post}){
    const {body,id,title,userId }=post;
    return(
        <div className="card">
            <h3>post Title: {title}</h3>
            <p>post Body: {body}</p>
            <h4>post Id: {id}</h4>
            <h4>post userId: {userId}</h4>
        </div>
    )
}