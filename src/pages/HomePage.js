import { SplitScreen } from "../SplitScreen";

const LeftHandComponent = ({ name }) => {
    return <p style={{
        backgroundColor: 'gray'
    }}>{name}</p>
}

const RightHandComponent = ({ msg }) => {
    return <p style={{
        backgroundColor: 'silver'
    }}>{msg}</p>
}

const HomePage = () => (
    <>
        <h1>This is home page</h1>
        <SplitScreen
            leftWeight={1}
            rightWeight={3}>

            <LeftHandComponent name="Isuri:" />
            <RightHandComponent msg="Unlimited Mind has Unlimited Potential" />
        </SplitScreen>


    </>

)

export default HomePage;