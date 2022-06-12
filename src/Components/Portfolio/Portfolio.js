import React, { useEffect, useState } from 'react';
import './Portfolio.css'

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {projects.map(({ id, image,live,title,client }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={live} target="_blank" className="btn btn-primary"> Live link</a>
                <a href={client} target="_blank" className="btn btn-primary"> GitHub</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio