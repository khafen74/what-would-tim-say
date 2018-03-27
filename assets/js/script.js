function changeTimText() {
    newtext = getText();
    document.getElementById("button-result").innerHTML = newtext;
}

function getText() {
    var sayings = [
        "Well, I think that's a great idea!",
        "You know, that reminds me . . .",
        "Yeah, I'm not sure if I'd do that exactly."
    ];
    return sayings[Math.floor(Math.random() * sayings.length)];
}