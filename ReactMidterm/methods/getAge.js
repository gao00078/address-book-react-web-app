function getAge(dob) {
    var birthday = new Date(dob);
    var result = Date.now() - birthday.getTime();
    var ageDate = new Date(result);
    return Math.abs(ageDate.getFullYear() - 1970);
}

export { getAge };
