const User = require('../db/models/user');

class UserController {

    // wyświetlanie widoku formularza rejestracji
    showRegister(req,res) {
        res.render('pages/auth/register');
    }

    // rejestowanie nowego użytkownika
    async register(req,res) {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        try {
            await user.save();
            res.redirect('/zaloguj');
        }
        catch (e) {
            console.log(e);

            res.render('pages/auth/register', {
                errors: e.errors,
                form: req.body
            })};
    
    }

    // wyświetlanie widoku formularza logowania
    showLogin(req,res){
        res.render('pages/auth/login');
    }

    // logowanie użytkownika
    async login(req,res){

        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user){ throw new Error('user not found') };

            const isValidPassword = user.comparePasswords(req.body.password);
            if (!isValidPassword){ throw new Error('password not valid') };
        
            // login
            req.session.user = user;
            req.session.user._id = user._id.toString();
            res.redirect('/');

        } catch {
            return res.render('pages/auth/login', {
                form: req.body,
                errors: true
            });
        }
    }

    // wylogowanie użytkownika
    logout(req,res) {
        req.session.destroy();
        res.redirect('/');
    };

    // wyswietlanie widoku profilu uzytkownika
    showProfile(req,res) {
        res.render('pages/auth/profile', {
            form: req.session.user
        });
    }

    // aktualizacja danych profilu uzytkownika
    async update(req,res){
        const user = await User.findById(req.session.user._id);
        user.email = req.body.email;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;


        if (req.body.password){ user.password = req.body.password; }

        try {
            await user.save();
            req.session.user = user;
            res.redirect('back');
        } catch (e) {
            res.render('pages/auth/profile', {
                errors: e.errors,
                form: req.body
            })
        }
    }
}

module.exports = new UserController();