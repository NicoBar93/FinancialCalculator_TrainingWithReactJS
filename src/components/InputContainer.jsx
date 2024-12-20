export default function InputContainer({ identifier, myData, name, onHandleChange }) {


    return (
        <p>
            <label>{name}</label>
            <input type='number' required value={myData[identifier]} onChange={(event) => onHandleChange(identifier, event.target.value)} />
        </p>
    )
}