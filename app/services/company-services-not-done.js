const Company = require('../db/models/company');
const fs = require('fs');

class CompanyService {

    async editCompany(req,res) {
        const { slug } = req.params;

        const company = await Company.findOne({ slug: slug })
        if (req.body.name) { company.name = req.body.name; }
        if (req.body.slug) { company.slug = req.body.slug; }
        if (req.body.employeesCount) { company.employeesCount = req.body.employeesCount; }
        
        if (req.file.filename && company.image) {
           fs.unlinkSync('public/uploads/' + company.image);
        }
        if (req.file.filename) { company.image = req.file.filename; }
        
        try {
            await company.save();
            return company;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}

module.exports = new CompanyService();