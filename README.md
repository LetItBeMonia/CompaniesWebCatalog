EN
# Application: Companies Web Catalog
This project was made during the Node.js course. It was created using technologies like:
- HTML, CSS, JavaScript
- Node.js (Express.js)+ MongoDB

## Used Concepts (and technologies)
- MVC framework
- user login and registration
- session
- serach mechanism, sorting, filtering
- pagination
- downloading and transfering files by user
- middleware and rooting
- database (mongoDB + mongoose)
- REST API
- view engine (ejs)
- dynamic layouts (ejsLayouts)

## How to view the application? | Application Launching
To launch the application you must have Node.js and npm downloaded on your computer. As for database you can either choose on-line mongoDB database or local mongoDB (in this case you also need to download it). Next:
1. Download this repository to your local drive.
2. Download all node modules used in the project with the CLI "npm install" command from within a directory that you have put project files in.
3. Create MongoDB database for the application with database name of your choice.
4. Configure data in .env.example file. In empty places input:
	- PORT number in which you want the app to open (8888 by default)
	- database server adress ("mongodb://localhost:27017/your-database-name" is local mongoDB database adress by default on Windows if you chose the download option; replace "your-database-name" with database name that you chose previously)
	- session key (it can be a string of random characters)
5. Change the file's name from ".env.example" to ".env".
6. To launch the app enter "npm run start" into your CLI.
7. View the launched app in a browser at a "localhost:PORT" adress (change "PORT" to the port number you have picked earlier).


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
- wyszukiwarka, sortowanie i filtrowanie wyników
- paginacja
- ściąganie i przekazywanie plików przez użytkownika
- middleware i rooting
- baza danych (mongoDB + mongoose)
- REST API
- view engine (ejs)
- dynamiczne szablony (ejsLayouts)


## Jak zobaczyć aplikację? | Uruchamianie aplikacji
Aby uruchomić projekt musisz mieć pobranego na komputer Node.js i npm. Jako bazy danych możesz użyć jednej z dwóch opcji: pobrać mongoDB na swój komputer lub utworzyć bazę danych, zakładając konto na stronie mongoDB. Następnie:
1. Pobierz repozytorium na lokalny dysk.
2. Ściągnij wykorzystane w projekcie moduły (node_modules) za pomocą komendy CLI "npm install" z poziomu katalogu, w którym znajduje się projekt.
3. Stwórz bazę danych MongoDB o dowolnie wybranej nazwie.
4. Skonfiguruj dane w pliku .env.example. W puste pola wprowadź:
	- numer PORT-u, na którym ma otworzyć się apka (domyślnie 8888)
	- adres serwera bazy danych (domyślny adres lokalny dla serwera mongoDB w systemie Windows to "mongodb://localhost:27017/twoja-nazwa-bd" - jeśli wybrałaś/-eś opcję pobierania bazy danych; zamień "twoja-nazwa-bd" na nazwę bazy danych, którą wcześniej wybrałeś/-aś).
	- klucz sesji hosta (string losowych znaków).
5. Zmień nazwę pliku ".env.example" na ".env".
6. Żeby uruchomić projekt wpisz w CLI "npm run start".
7. Przeglądaj projekt w przeglądarce pod adresem "localhost:PORT" (PORT zastąp wybranym wcześniej numerem portu).
