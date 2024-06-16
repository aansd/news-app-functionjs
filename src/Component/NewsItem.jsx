import img from '../asset/news.png'
const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3" style={{ Width: "345px" }}>
        <img src={src?src:img} style={{ height: '200px', width: '100%' }} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
            <p className="card-text">{description ? description.slice(0, 90) : "News information is not defined."}</p>
            <a href={url} className="btn btn-light">Go somewhere</a>
        </div>
    </div>
)
    
}

export default NewsItem;