function changeTimText() {
    newtext = getText();
    document.getElementById("button-result").innerHTML = newtext;
}

function getText() {
    var sayings = [
        "Well, I think that's a great idea!",
        "You know, that reminds me of . . .",
        "Yeah, I'm not sure if I'd do that exactly.", 
        "I like prelims because you can get beers.",
        "Let me put my drinking pants on.", 
        "I think you should have three reasons to do something.", 
        "It's a triple win! No! . . . It's a quadrouple win! It's a win win win win!!!!!!!"
    ];
    return sayings[Math.floor(Math.random() * sayings.length)];
}
