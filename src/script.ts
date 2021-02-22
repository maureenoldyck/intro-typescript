( () => {
    const compareUserGuess = (event: any): void => {
        event.preventDefault();

        const secretNumber: number = generateSecretNumber();
        const userNumber: unknown = (<HTMLInputElement>document.getElementById('guess')).value;

        if (secretNumber == (userNumber as number)) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    const generateSecretNumber = ():number => {
        const secretNumber: number = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    const getRandomArbitrary = (min:number, max:number): number => {
        return Math.round(Math.random() * (max - min) + min);
    }

    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);

})();