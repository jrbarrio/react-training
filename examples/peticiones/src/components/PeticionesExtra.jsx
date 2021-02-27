import axios from 'axios';

export default function PeticionesExtra() {

    function handleClickPOST() {
        axios.post('/posts', {
            userId: 12,
            title: 'Mi título',
            body: 'Este es el post'
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.message)
        });
    }

    async function handleClickDELETE() {
        try {
            const response = await axios.delete('/posts/1');
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <button onClick={handleClickPOST}>Petición POST</button>
            <button onClick={handleClickDELETE}>Petición DELETE</button>
        </div>
    );
}