( () => {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);

  const compareUserGuess = (event) => {
        event.preventDefault();

        const secretNumber: number = generateSecretNumber();
        const userNumber: unknown = (<HTMLInputElement>document.getElementById('guess')).value;

        if (secretNumber == (userNumber as number)) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

 const generateSecretNumber = () => {
        const secretNumber: number = getRandomArbitrary(1, 22);

        return secretNumber;
    }

  const getRandomArbitrary = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }
})();