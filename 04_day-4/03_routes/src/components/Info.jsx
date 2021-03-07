export default function Info(props) {
    
    function handleClick() {
        props.history.push('/about');
    }
    
    return (
        <>
            <p>INFO Component</p>
            <button onClick={ handleClick }>Go to About</button>
        </>
    );
}