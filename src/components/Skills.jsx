import { skills, skills_rotate } from "../data";
import 'react-circular-progressbar/dist/styles.css';
import { SkillsItem } from "./SkillsItem";


export const Skills = () => {
  return (
    <>
      {skills_rotate.map((item) => {
        return (
          <div className="progress__box">
            <div className="progress__circle">
              <SkillsItem 
                key={item.id} {...item}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}
