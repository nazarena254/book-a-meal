# Book A Meal

> A meal delivery service.

## :hammer: Built With

- HTML, CSS, Angular
- Python, Django, PostgreSQL

### :computer: Setup
To get a local copy up and running follow these simple example steps.

##### Cloning the repository:  
 ```bash 
$ git clone https://github.com/blancc-page/book-a-meal
```

## Angular Setup
```bash
$ cd book-a-meal/mealangular
$ ng serve. 
$ Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.
```

## Django Setup

##### Navigate into book-a-meal/meal  
 ```bash 
$ cd book-a-meal/meal  
```
##### Install and activate Virtual  
 ```bash 
$ python3 -m venv virtual - source virtual/bin/activate  
```  
##### Install Dependencies  
 ```bash 
$ pip install -r requirements.txt 
```  
 ##### Setup Database  
 - SetUp your database User,Password, Host then make migrate  
 ```bash 
$ python manage.py makemigrations mealapp
 ``` 
 Now Migrate  
 ```bash 
$ python manage.py migrate 
```
##### Run the application  
 ```bash 
$ python manage.py runserver 
``` 
##### Testing the application  
 ```bash 
$ python manage.py test 
```
Open the application on your browser `127.0.0.1:8000`.  

## Behaviour Driven Development

> A user should be able to:

- sign in
- view menu
- add items to a cart
- view cart total before checkout
- user can complete orders

## :trollface: Authors

👤 **Moses Muta**

- GitHub: [@githubhandle](https://github.com/blancc-page)

👤 **Nazarena Wambura**

- GitHub: [@githubhandle](https://github.com/nazarena254)

👤 **Charlotte Natasha Onyango**

- GitHub: [@githubhandle](https://github.com/Charlotte-Natasha)

👤 **James Njoroge**

- GitHub: [@githubhandle](https://github.com/devjamesnjoroge)

👤 **Jacqueline Ngabo**

- GitHub: [@githubhandle](https://github.com/jay-ngabo)



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## :muscle: Show your support

    Please give a⭐️if you love this project.
    

## 📝 License

This project is [MIT](./LICENSE.md) licensed.
