import axios from 'axios';

export default function PeticionesExtra() {

    function handleClickPost() {
        axios.post('/posts', {
            userId: 12,
            title: 'Mi titulo',
            body: 'Este es el post'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error); 
        });
    }

    async function handleClickDelete() {
        try {
            const response = await axios.delete('/posts/1');
            console.log(response);
        } catch (error) {
            console.log(error); 
        }
    }

    return (
        <div>
            <button onClick={ handleClickPost }>Peticion POST</button>
            <button onClick={ handleClickDelete }>Peticion DELETE</button>
        </div>
    );
}