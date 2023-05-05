export const largeSkillListItem = ({ skill }) => {
    const { name, rating, skillList } = skill;
    return (
        <>
            <h3>{name}</h3>
            <h3>{rating}</h3>
            <ul>
                {skillList.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </>
    );
}