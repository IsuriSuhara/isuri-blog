export const NumberedList = (
    {
        items,
        resourceName,
        itemComponent: ItemComponent
    }
) => {
    return (
        <>
            {items.map((item, i) => (
                <>
                    <div className="rowC">
                        <h3>{i + 1}.</h3>
                        <ItemComponent key={i} {...{ [resourceName]: item }} />
                    </div>
                </>
            ))}
        </>
    )
}