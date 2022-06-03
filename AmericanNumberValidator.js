function telephoneCheck(str) {
    let regex = /^1?\s?\([0-9]{3}\)\s?[0-9]{3}[-\s]?[0-9]{4}$|^1?\s?[[0-9]{3}[-\s]?\s?[0-9]{3}[-\s]?[0-9]{4}$/;
    console.log(regex.test(str));
    return regex.test(str);
}

telephoneCheck("1 (555) 555-5555");