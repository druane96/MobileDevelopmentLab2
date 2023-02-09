function string_length(value) {
    return value.length;
}
console.log("The length of the string is: " + string_length("test 1"));
function string_length1(value) {
    return value.replace(" ", "").length;
}
console.log("The length of the string is: " + string_length1("test 1"));
function combined(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
console.log("The length of the string is: " + combined("test 1"));
