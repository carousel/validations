//Javascript utility object, that contains some commonly used validation methods
/*Types of validations:

 *presence (not empty)
 *length ( based on range)
 *typeof string
 *contains type (all alpha)
 *valid email address format
 */


var validate = {
    isEmpty:function (value) {
        return value.length > 0 ? console.log("Thank you - not empty") :  console.warn("Required field");
    },
    lengthRange: function (value,min,max) {
        value.length < min ? console.warn(value + " is too short") : console.log("Thank you - not too short");
        value.length > max ? console.warn(value + " is too long") : console.log("Thank you - not too long");
    },
    typeOfString: function (value) {
        return typeof value === "string" ? console.log("Thank you - string entered") : console.warn("Please enter a string");
    },
    containsAlpha: function (value) {
        if(typeof value === "number"){
                console.warn("Please use LETTERS and DIGITS");
        }else if(value.match(/[^0-9a-z]/i)){
            console.warn("Only LETTERS and DIGITS are allowed!");
        }else if(!value.match(/\d/)){
            console.warn("At least one DIGIT is required!");
        }else if(!value.match(/[a-z]/i)){
            console.warn("At least one LETTER is required!");
        }else{
                console.warn("Thank you - you properly used all alpha");
        }
    },
    validEmail: function (value) {
        if(( /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i ).test(value) === true){
            console.log("Thank you - you email address is well formatted");
        }else{
            console.warn("Wrong email address format");
        }

    }
};
