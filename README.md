[EN]
# </> Companies Web Catalog
A full-Stack Companies Catalog Web application made with JavaScript and Node.js.

## ⌨️ Technologies
- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- MongoDB

## 🚀 Features
- User registration and login
- Add, edit and delete companies as a logged in user
- Sort companies by name or number of employees
- Search results by name
- Filter search results by min and max number of employees 
- Pagination of search results
- Browse catalog of companies
- Download CSV file with a list of searched companies

## 📖 Implemented concepts
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

## 🚦 Running the Project
Requirements: Node.js. As for database you can either choose on-line mongoDB database (mongo Atlas) or local mongoDB.
### Instructions
1. Clone the repository.
2. Download dependencies with `npm install` command.
3. Create MongoDB database for the application with database name of your choice.
4. Configure data in .env.example file. In empty places input:
	- PORT number in which you want the app to open (8888 by default)
	- database server adress (example structue of the adress: `mongodb://localhost:XXXXX/your-database-name`; `mongodb://localhost:27017/your-database-name` is local mongoDB database adress by default on Windows if you chose the download option; replace "your-database-name" with database name that you chose previously)
	- session key (it can be a string of random characters)
5. Change the file's name from `.env.example` to `.env`.
6. Add "uploads" directory in directory named "public" to be able to transfer images in the app (this step is not required).
7. To launch the app run `npm run start` command.
8. View the launched app in a browser at a `localhost:PORT` adress (change "PORT" to the port number you have picked earlier).

## 🔍 Application Overview | Przegląd aplikacji

### 1. Homepage for not-logged in user
If you're logged in you will see user profile details.
![1_homepage](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/edd0f640-dba0-4c51-b89b-5127b8142be8)

### 2. Registration Form
![2_registration](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/c8b7afe5-b4af-47e9-8669-22c12c250311)

### 3. Editing user profile details
<img width="1917" height="790" alt="editing-profile-details" src="https://github.com/user-attachments/assets/395e3cb9-2a05-4abe-a866-24e89f586e7c" />

### 4. Companies catalog
<img width="1917" height="908" alt="added-dogs-company" src="https://github.com/user-attachments/assets/9cb4939b-e4bc-471f-8c85-ebef492cf6e0" />

### 5. Editing company's details
<img width="1917" height="867" alt="editing-comapny-details-adding-image" src="https://github.com/user-attachments/assets/98ad4886-ba0b-40b5-b649-c94d1b3c5064" />

### 6. Displaying search results
![5_search_results](https://github.com/LetItBeMonia/CompaniesWebCatalog/assets/89008855/a4f7b4e6-4a7c-41f7-a726-b25ab3f12883)

### 7. Sorting
<img width="1917" height="905" alt="sortowanie-od-z-do-a" src="https://github.com/user-attachments/assets/a5585582-43dd-4d90-b7a4-8d339084b320" />

---------------------------------------------------------------------------------------------------

[PL]

# Projekt: Katalog firm

## Stack technologiczny:
HTML  |  CSS  |  Bootstrap  |  JavaScript  |  Node.js  |  MongoDB

## 🚀 Funkcjonalności
- Rejestracja i logowanie użytkownika
- Dodawanie, edytowanie i usuwanie firm z katalogu przez zalogowanego użytkownika
- Sortowanie wyników wyszukiwania według nazwy lub liczby pracowników
- Wyszukiwanie firm po nazwie
- Filtrowanie wyników wyszukiwania według minimalnej i maksymalnej liczby pracowników
- Paginacja wyników wyszukiwania
- Przeglądanie katalogu firm
- Pobieranie pliku CSV z listą wyszukiwanych firm

## 📖 Koncepcje
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


## 🚦 Uruchamianie aplikacji:
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
