function Hello(props) {
    return <div>
        <h3>Hello component: { props.name }</h3>
        { props.children }
    </div>;
}

export default Hello;