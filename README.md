EN
# Application: Companies Web Catalog
This project was made during the Node.js course. It was created using technologies like:
- HTML, CSS, JavaScript
- Node.js (Express.js)+ MongoDB

## Used Concepts (and technologies)
- MVC framework
- user login and registration
- session
- serach mechanism, sorting, filtering, pagination
- downloading and transfering files
- middleware and rooting
- database (mongoDB + mongoose)
- REST API
- view engine (ejs)
- dynamic layouts (ejsLayouts)

## How to view the application? 
You can download the project and run it on your PC (Application Launching section below) or look at the "Application Overview" at the boottom of the page!

## Application Launching
To launch the application you must have Node.js and npm downloaded on your computer. As for database you can either choose on-line mongoDB database or local mongoDB (in this case you also need to download it). Next:
1. Download this repository to your local drive.
2. Download all node modules used in the project with the CLI "npm install" command from within a directory that you have put project files in.
3. Create MongoDB database for the application with database name of your choice.
4. Configure data in .env.example file. In empty places input:
	- PORT number in which you want the app to open (8888 by default)
	- database server adress (example structue of the adress: "mongodb://localhost:XXXXX/your-database-name"; "mongodb://localhost:27017/your-database-name" is local mongoDB database adress by default on Windows if you chose the download option; replace "your-database-name" with database name that you chose previously)
	- session key (it can be a string of random characters)
5. Change the file's name from ".env.example" to ".env".
6. Add "uploads" directory in directory named "public" to be able to transfer images in the app (this step is not required).
7. To launch the app enter "npm run start" into your CLI.
8. View the launched app in a browser at a "localhost:PORT" adress (change "PORT" to the port number you have picked earlier).


---------------------------------------------------------------------------------------------------

PL

# Projekt: Katalog firm
Projekt został stworzony w ramach kursu i nauki Node.js. Napisany przy użyciu technologii, takich jak:
- HTML, CSS, JavaScript
- Node.js (Express.js)+ MongoDB

## Wykorzystane koncepty (i technologie)
- wzorzec MVC
- rejestracja i logowanie użytkowników
- sesja
- wyszukiwarka, sortowanie i filtrowanie wyników, paginacja
- ściąganie i przekazywanie plików
- middleware i rooting
- baza danych (mongoDB + mongoose)
- REST API
- view engine (ejs)
- dynamiczne szablony (ejsLayouts)

## Jak zobaczyć aplikację?
Możesz pobrać cały projekt i uruchomić go na swoim komputerze (sekcja "Uruchamianie aplikacji" poniżej) lub spojrzeć na "Przegląd aplikacji" na samym dole strony!

## Uruchamianie aplikacji
Aby uruchomić projekt musisz mieć pobranego na komputer Node.js i npm. Jako bazy danych możesz użyć jednej z dwóch opcji: pobrać mongoDB na swój komputer lub utworzyć bazę danych, zakładając konto na stronie mongoDB. Następnie:
1. Pobierz repozytorium na lokalny dysk.
2. Ściągnij wykorzystane w projekcie moduły (node_modules) za pomocą komendy CLI "npm install" z poziomu katalogu, w którym znajduje się projekt.
3. Stwórz bazę danych MongoDB o dowolnie wybranej nazwie.
4. Skonfiguruj dane w pliku .env.example. W puste pola wprowadź:
	- numer PORT-u, na którym ma otworzyć się apka (domyślnie 8888)
	- adres serwera bazy danych (przykładowa struktura adresu: "mongodb://localhost:XXXXX/twoja-nazwa-bd"; domyślny adres lokalny dla serwera mongoDB w systemie Windows to "mongodb://localhost:27017/twoja-nazwa-bd" - jeśli wybrałaś/-eś opcję pobierania bazy danych; zamień "twoja-nazwa-bd" na nazwę bazy danych, którą wcześniej wybrałeś/-aś).
	- klucz sesji hosta (string losowych znaków).
5. Zmień nazwę pliku ".env.example" na ".env".
6. Dodaj folder o nazwie "uploads" do folderu "public", aby móc wgrywać zdjęcia w aplikacji (ten krok nie jest wymagany).
7. Żeby uruchomić projekt wpisz w CLI "npm run start".
8. Przeglądaj projekt w przeglądarce pod adresem "localhost:PORT" (PORT zastąp wybranym wcześniej numerem portu).


---------------------------------------------------------------------------------------------------

# Application Overview | Przegląd aplikacji

## #1 Homepage
This is how homepage looks like.
![1_homepage](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/edd0f640-dba0-4c51-b89b-5127b8142be8)

## #2 Registration Form
Here is the registration form. Other forms on the site include login form and company insert form for logged in users.
![2_registration](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/c8b7afe5-b4af-47e9-8669-22c12c250311)

## #3 Companies Catalog
Catalog displays list of companies added by registered users. You can sort or filter the list. At the bottom left corner there is navigation bar of pagination. You can also download a CSV file with the entire companies list!
![3_companies_list](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/f91b9735-04d4-4a69-a296-cf3970053fb2)

## #4 Displaying search results
Search results for "mycompany" string.
![5_search_results](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/a4f7b4e6-4a7c-41f7-a726-b25ab3f12883)

## #5 Edit forms
You can also edit details of the companies you added to the catalog. Other edit form on the site includes profile details edit form.
![6_comapnys_edit](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/f563ab3f-dda2-4f76-8ff8-4442c9137b62)
