( ():void => {
    
    const compareUserGuess:Function = (event:Event) => {
        event.preventDefault();

        const secretNumber:number = generateSecretNumber();
        const userNumber:number = (document.getElementById('guess') as HTMLFormElement).valueAsNumber;

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    const generateSecretNumber:Function = ():number => {
        const secretNumber: number = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    const getRandomArbitrary:Function = (min:number, max:number): number => {
        return Math.round(Math.random() * (max - min) + min);
    }

    (document.getElementById('guess-form') as HTMLFormElement).addEventListener("submit", (compareUserGuess as EventListener));

})();