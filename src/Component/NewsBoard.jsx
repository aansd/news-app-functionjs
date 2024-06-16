import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export const NewsBoard = () => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2feb68e0827d4c099faa20924c745054`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching the news:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredArticles = articles
        ? articles.filter(article => 
            (article.title && article.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        : [];

    return (
        <div>
            <h2 className="text-center mt-3">Latest <span className="badge bg-dark">News</span></h2>
            <div className="container my-3">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="container">
                <div className="row">
                    {filteredArticles.map((news, index) => (
                        <div className="col-md-4" key={index}>
                            <NewsItem 
                                title={news.title} 
                                description={news.description} 
                                src={news.urlToImage} 
                                url={news.url} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
