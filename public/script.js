(()=>{"use strict";var e,n;e=function(){return n(1,22)},n=function(e,n){return Math.round(Math.random()*(n-e)+e)},document.getElementById("guess-form").addEventListener("submit",(function(n){n.preventDefault();var t=e(),u=document.getElementById("guess").valueAsNumber;t==u?alert("Awesome! You number "+u+" was correct. You can be named many things, hungry not being one of them."):alert("Bummer... You guessed "+u+" and the secret number was "+t+".")}))})();
//# sourceMappingURL=script.js.map