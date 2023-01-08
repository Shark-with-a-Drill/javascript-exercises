const reverseString = function(string) {
    if (!string) {
        return string;
    }
    const invArr = string.split('');
    invArr.reverse();
    string = invArr.join('');
    return string;
};
// Do not edit below this line
module.exports = reverseString;
