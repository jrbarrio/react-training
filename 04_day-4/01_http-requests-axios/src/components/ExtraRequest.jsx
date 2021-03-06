import axios from 'axios';

export default function ExtraRequest() {

    function handleClickPost() {
        axios.post('/posts', {
            userId: 12,
            title: 'My title',
            body: 'This is a post'
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
            <button onClick={ handleClickPost }>POST</button>
            <button onClick={ handleClickDelete }>DELETE</button>
        </div>
    );
}