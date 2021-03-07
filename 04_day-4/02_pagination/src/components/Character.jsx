import classes from './Character.module.css';

export default function Character({ name, image, species, status }) {
    return (
        <div className={classes.wrapper}>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    );
}