import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

export const Home = () => {
  return (
    <section className='home section grid'>
      <img src={ Profile } alt='' className='home__img' />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Carlos Villaseñor Quintero</span> Web Designer
          </h1>
          <p className="home__description">Yo soy yo, la mera pistola, y lo que siempre
            digo es que soy una cosa barbara
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block__left"></div>
      {/* <div className="color__block__right"></div> */}
    </section>
  )
}
