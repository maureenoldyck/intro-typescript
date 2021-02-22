( ():void => {
    
    const compareUserGuess:Function = (event:Event) => {
        event.preventDefault();

        const secretNumber:number = generateSecretNumber();
        const userNumber:number = (document.getElementById('guess') as HTMLFormElement).valueAsNumber;

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else if(userNumber == (secretNumber + 1) || userNumber == (secretNumber - 1)) {
            alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
        }else {
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