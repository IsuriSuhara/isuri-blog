import { RegularList } from "../components/RegularList";
import { smallSkillListItem } from "../skills/smallSkillListItem";
import { largeSkillListItem } from "../skills/largeSkillListItem";

const skills = [{
    name: 'Programming Languages',
    rating: '5/10',
    skillList: ['Java', 'Python', 'Javascript', 'Typescript']
},
{
    name: 'Frameworks and Libraries',
    rating: '5/10',
    skillList: ['React', 'Redux', 'Angular', 'Springboot']
},
]

const AboutPage = () => {
    return (
        <>
            <h1>About me</h1>
            <p> A Problem Solver with one year of experience in developing, and designing high-quality
                software solutions. Out of the box thinker, dedicated to completing given tasks efficiently.</p>
            <RegularList
                items={skills}
                resourceName="skill"
                itemComponent={smallSkillListItem} />
            <RegularList
                items={skills}
                resourceName="skill"
                itemComponent={largeSkillListItem} />
        </>

    );
}

export default AboutPage;