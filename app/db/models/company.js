const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { checkForbiddenString } = require('../validators');


// SCHEMAT

const companySchema = new Schema ({
    slug: {
        type: String,
        required: [true, 'Pole slug jest wymagane'],
        minLength: [3,'Minimalna liczba znaków to 3'],
        validate: value => checkForbiddenString(value, 'slug'),
        trim: true,
        lowercase: true,
        unique: [true, 'Ten slug jest już zajęty']
    },
    name: {
        type: String,
        required: [true, 'Pole name jest wymagane']
    },
    employeesCount: {
        type: Number,
        min: 1,
        default: 1
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: String
});


// MODEL

const Company = mongoose.model('Company', companySchema);

module.exports = Company;