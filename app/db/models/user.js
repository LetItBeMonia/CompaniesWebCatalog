const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { validateEmail } = require('../validators');
const randomString = require('randomstring');


// SCHEMAT

const userSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'Adres email jest wymagany'],
        lowercase: true,
        trim: true,
        unique: true,
        validate: [validateEmail, 'Email nieprawidłowy'],
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Hasło powinno posiadać min. 3 znaki']
    },
    firstName: String,
    lastName: String,
    apiToken: String
});


// SCHEMAT - PRE

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next();
});

userSchema.pre('save',function(next) {
    const user = this;
    if (user.isNew) {
        user.apiToken = randomString.generate(30);
    }
    next();
});

// SCHEMAT - POST

userSchema.post('save', function (error, doc, next) {
    if (error.code === 11000) {
        error.errors = { email: { message: 'Ten email jest już zajęty' }};
    };
    next(error);
});

// SCHEMAT - METODY

userSchema.methods = {
    comparePasswords(password){
        return bcrypt.compareSync(password, this.password);
    }
};


userSchema.virtual('fullName').get(function() {
    if(this.firstName && this.lastName) { return `${this.firstName || ''} ${this.lastName && this.lastName[0] || ''}.`; }
})


// MODEL

const User = mongoose.model('User', userSchema); // dzięki tej nazwie kolekcja w bazie bedzie nazywać się Users

module.exports = User;
