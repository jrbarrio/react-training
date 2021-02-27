import classes from './Character.module.css';

export default function Character({ name, image, species, status }) {
    return (
        <div className={classes.wrapper}>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>Especie: {species}</p>
            <p>Estado: {status}</p>
        </div>
    );
}