export const smallSkillListItem = ({skill}) => {
    const {name, rating} = skill;
    return(
        <p>Name: {name}, Rating: {rating}</p>
    );
}