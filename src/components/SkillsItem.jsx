import 'animate.css';

export const SkillsItem = ({img, title}) => {

  return (
    <div>
      <div className="skills__item">
        <img src={img} alt="" className="skills__img" />
      </div>
      <h3 className="skills__title">{title}</h3>
    </div>
  )
}
