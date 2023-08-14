import { PortfolioItem } from '../../components/PortfolioItem';
import { portfolio } from '../../data';
import "./portfolio.css";
import 'animate.css';

export const Portfolio = () => {
  return (
    <section className="portfolio section animate__animated animate__zoomIn">
      <h2 className="section__title">My <span>Portfolio</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}
