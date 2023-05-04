export const largeSkillListItem = ({skill}) => {
    const {name, rating, skillList} = skill;
    return(
        <>
        <h3>{name}</h3>
        <p>{rating}</p>
        <h3>Skills</h3>
        <ul>
            {skillList.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        </>
    );
}