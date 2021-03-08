const validateDni = (value) => {
    const allowedCharacters = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
        const number = value.substr(0, value.length - 1);
        const character = value.substr(value.length - 1, 1);
        const pos = number % 23;
        const selectedCharacter = allowedCharacters.substring(pos, pos + 1);
        if (selectedCharacter !== character.toUpperCase()) {
            return false;
        } else {
            return true;
        }
    } else {
        return false
    }
}

export { validateDni };