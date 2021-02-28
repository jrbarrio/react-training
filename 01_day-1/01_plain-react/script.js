const person = {
    name: 'Jorge',
    surname: 'Gómez',
    image: 'http://'
}

const person2 = { ...person, surname: 'Roldán' };
const person3 = Object.assign(person, { surname: 'Roldán' });

console.log("person === person2: ", person === person2)
console.log("person === person3: ", person === person3)

const { name, surname } = person;
console.log("Destructured properties:", name, surname);

const imageAttributes = {
    id: 'imgMain',
    src: 'https://i.pravatar.cc/300',
    className: 'imagen'
}

function showPerson() {
    return `${person.name} ${person.surname}`;
}

function greet(person) {
    return (person) ? <h1 className="">{showPerson()}</h1> : <h1>This person does not exist</h1>;
}

const element = (
    <div>
        {greet(person)}
        <p style={{ color: 'green', backgroundColor: 'red' }}>Some irrelevant information...</p>
        {/* A comment */}
        <img {...imageAttributes} />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));