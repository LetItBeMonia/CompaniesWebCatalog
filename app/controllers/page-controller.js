class PageController {

    // wyświetlanie widoku strony głównej
    showHome(req,res) {
        res.render('pages/home', {
            title: 'Strona główna'
        });
    }

    // wyświetlanie widoku nie znalezionego zasobu
    showNotFound(req,res) {
        res.render('errors/404', {
            title: 'Nie znaleziono',
            layout: 'layouts/minimalistic'
        });
    }
}

module.exports = new PageController();