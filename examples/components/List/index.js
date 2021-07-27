const List = ({values = []}) => {
    return <ul>
        {values.map((el, idx) => {
            return <li key={idx}>{el}-{idx}</li>
        })}
    </ul>
}

export default List;