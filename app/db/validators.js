// WALIDATORY DLA BD

module.exports = {

    checkForbiddenString(value, forbiddenString) {
        if (value === forbiddenString) {
            throw new Error(`Nazwa "${forbiddenString}" jest zakazana`);
        };
    },

    validateEmail(email) {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    }
};