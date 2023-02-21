import React from "react";
import "./card.scss";
import { useData } from "../../context/use-data";

const Card = () => {
  const {news} = useData();
  
  
  return (
    <div className="news">
      <div className="container mt-5"> 
        <div className="d-flex flex-wrap">

        {news.map((news, index) => {
          return (
            <div className="card-group mt-2 col-4" key={index}>
              <div className="card">
                <img src={news.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{news.publishedAt}</small>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        
        <div className="mt-1 mb-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Card;
