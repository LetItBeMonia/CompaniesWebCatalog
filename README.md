[EN]
# Companies Web Catalog

## Tech-stack used to create the app:
HTML  |  CSS  |  Bootstrap  |  JavaScript  |  Node.js  |  MongoDB

## Functionalities:
- User registration and login
- Adding, editing and deleting companies to a catalog as a logged in user
- Adding company's image/logo
- Searching companies by name
- Sorting searching results by name (A-Z, Z-A, employees nr ascending, employees nr descending)
- Filtering searching results by min and max employees number
- Pagination of searching results
- Browsing catalog of companies as a not logged in user
- Downloading CSV file with a list of searched companies

## Technologies and concepts used:
- MVC framework
- model schemas (mongoose library)
- view engine (ejs)
- dynamic layouts (ejsLayouts)
- local and cloud database (mongoDB + mongo Atlas)
- backend server (express.js)
- REST
- routing
- session management
- middleware usage
- responsiveness

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

---------------------------------------------------------------------------------------------------

## Want to launch application on your own computer? Use the guide below.
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

[PL]

# Projekt: Katalog firm

## Stack technologiczny:
HTML  |  CSS  |  Bootstrap  |  JavaScript  |  Node.js  |  MongoDB

## Funkcjonalności:
- Rejestracja i logowanie użytkownika
- Dodawanie, edytowanie i usuwanie firm z katalogu przez zalogowanego użytkownika
- Dodawanie zdjęcia/logo firmy
- Wyszukiwanie firm po nazwie
- Sortowanie wyników wyszukiwania według nazwy (A-Z, Z-A) oraz wg liczby pracowników rosnąco i malejąco
- Filtrowanie wyników wyszukiwania według minimalnej i maksymalnej liczby pracowników
- Paginacja wyników wyszukiwania
- Możliwość przeglądania katalogu firm przez niezalogowanego użytkownika
- Pobieranie pliku CSV z listą wyszukiwanych firm

## Wykorzystane technologie i koncepcje:
- Architektura MVC
- Schematy modeli (biblioteka Mongoose)
- Silnik widoków (EJS)
- Dynamiczne layouty (ejsLayouts)
- Baza danych lokalna i w chmurze (MongoDB + Mongo Atlas)
- Serwer backendowy (Express.js)
- REST
- Routing
- Zarządzanie sesją
- Wykorzystanie middleware
- Responsywność


## Chcesz uruchomić aplikację na swoim komputerze? Skorzystaj z poniższej instrukcji.
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
