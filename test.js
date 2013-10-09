// Test suite

validate.isEmpty("");
validate.isEmpty("username");

validate.lengthRange("username",2,3);
validate.lengthRange("username",2,10);

validate.typeOfString(123);
validate.typeOfString("username");

validate.containsAlpha("username");
validate.containsAlpha(123);
validate.containsAlpha("username123");

validate.validEmail("username@@dot.com");
validate.validEmail("username@dot.com");
