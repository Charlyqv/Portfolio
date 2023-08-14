import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
import 'animate.css';

export const Home = () => {
  return (
    <section className='home section grid'>
      <img src={ Profile } alt='' className='home__img animate__animated animate__zoomIn'/>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title animate__animated animate__lightSpeedInLeft">
            <span>I'm Carlos Villaseñor Quintero</span> Full Stack Developer
          </h1>
          <p className="home__description animate__animated animate__lightSpeedInLeft">I'm a Full Stack Developer excels 
          in Javascript and PHP, employing tools like HTML, CSS, jQuery, and Ajax, 
          along with SQL expertise. Competent in React and CodeIgniter frameworks. 
          With a knack for crafting dynamic interfaces and handling databases, 
          I'm a versatile professional who merges creativity with technical prowess.
          </p>
          <Link to='/about' className='button animate__animated animate__lightSpeedInLeft'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block__right"></div>
      <div className="color__block__left"></div>
    </section>
  )
}
