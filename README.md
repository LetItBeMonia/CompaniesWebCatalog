EN
# Application: Companies Web Catalogue
This project was made during the Node.js course. It was created using technologies like:
- HTML, CSS, JavaScript
- Node.js (Express.js)+ MongoDB

## Used Concepts
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
To launch the application you must have Node.js, npm and MongoDB downloaded on your computer. Next:
1. Download the repository to your local drive.
2. Download all node modules used in the project with the CLI "npm install" command from within a directory that you have put project files in.
3. Configure data in .env.example file. In empty places input:
	- PORT number in which you want the app to open (3000 by default)
	- database server adress ("mongodb://localhost:27017/node-kurs" is local mongoDB database adress by default on Windows)
	- session key (it can be a string of random characters)
4. Change the file's name from ".env.example" to ".env".
5. To launch the app enter "npm run start" into your CLI.
6. View the launched app in a browser at a "localhost:PORT" adress (change "PORT" to the port number you have picked earlier).


---------------------------------------------------------------------------------------------------

PL

# Projekt: Katalog firm
Projekt został stworzony w ramach kursu i nauki Node.js. Napisany przy użyciu technologii, takich jak:
- HTML, CSS, JavaScript
- Node.js (Express.js)+ MongoDB

## Wykorzystane koncepty
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


## Uruchamianie projektu
Aby uruchomić projekt musisz mieć pobranego na komputerze Node.js, npm i MongoDB. Następnie:
1. Pobierz repozytorium na lokalny dysk.
2. Ściągnij wykorzystane w projekcie moduły (node_modules) za pomocą komendy CLI "npm install" z poziomu katalogu, w którym znajduje się projekt.
3. Skonfiguruj dane w pliku .env.example. W puste pola wprowadź:
	- numer PORT-u, na którym ma otworzyć się apka (domyślnie 3000)
	- adres serwera bazy danych (domyślny adres lokalny dla serwera mongoDB w systemie Windows to "mongodb://localhost:27017/node-kurs")
	- klucz sesji hosta (string losowych znaków).
4. Zmień nazwę pliku ".env.example" na ".env".
5. Żeby uruchomić projekt wpisz w CLI "npm run start".
6. Przeglądaj projekt w przeglądarce pod adresem "localhost:PORT" (PORT zastąp wybranym wcześniej numerem portu).
