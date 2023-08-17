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
- baza danych
- REST API
- view engine (ejs)
- szablony (ejsLayouts)


## Uruchamianie projektu
Aby uruchomić projekt musisz mieć pobranego na komputerze Node.js, npm i MongoDB. Następnie:
1. Pobierz repozytorium na lokalny dysk.
2. Ściągnij wykorzystane w projekcie moduły (node_modules) za pomocą komendy CLI "npm install" z poziomu katalogu, w którym znajduje się projekt.
3. Skonfiguruj dane w pliku .env.example. W puste pola wprowadź:
	- numer PORT-u, na którym ma otworzyć się apka (domyślnie 3000)
	- adres serwera bazy danych (domyślny adres lokalny dla serwera mongoDB to "mongodb://localhost:27017/node-kurs")
	- klucz sesji hosta (string losowych znaków).
4. Zmień nazwę pliku ".env.example" na ".env".
5. Żeby uruchomić projekt wpisz w CLI "npm run start".
6. Przeglądaj projekt w przeglądarce pod adresem "localhost:PORT" (PORT zastąp wybranym wcześniej numerem portu).
