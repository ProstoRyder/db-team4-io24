# Запити зацікавлених осіб

## Вступ

У цьому документі ми пропонуємо вам детальну інформацію щодо нашого проєкту "swiftAID". Тут ви знайдете огляд основних функцій продукту, вимоги до його 
функціональності, практичності, надійності, продуктивності та експлуатаційної придатності (FURPS).

### Мета 

Мета цього документу полягає в тому, щоб ретельно проаналізувати потреби користувачів та встановити вимоги до розробки програмного забезпечення, щоб створити зручний та ефективний інструмент для управління проєктами.

### Контекст

Цей документ містить інформацію про функціональність та практичність нашого проєкту "swiftAID". Його ціль - привернути увагу зацікавлених осіб до нашого проєкту, показавши їм його переваги та можливості.

### Основні визначення та скорочення

**[Стейкхолдер проєкту](https://wizeclub.education/blog/stejkholderi-proyektu-hto-taki-ta-chomu-vazhlivo-nalagoditi-z-nimi-komunikatsiyu/)** — це зацікавлена в проєкті особа чи сторона, що має до нього якесь відношення. До зацікавлених осіб належать: команда проєкту, інвестори, клієнти, тощо.

**[Бізнес-актори](https://ebrary.net/73275/computer_science/business_actors_business_workers)** - це люди, організації або навіть системи, які виконують певну діяльність, що належить до процесу, але не є частиною цільової компанії. Тобто вони непідконтрольні компанії.

**[Бізнес-працівники](https://ebrary.net/73275/computer_science/business_actors_business_workers)** - це люди, організації або навіть системи, які виконують певну діяльність, що належить до процесу, і є частиною цільової компанії.

**[FURPS](https://en.wikipedia.org/wiki/FURPS)** - класифікація вимог до програмних систем. Утворена від перших літер слів:
- **F**unctionality - Функціональні вимоги. Вони є основними, за цими вимогами будуються діаграми варіантів використання.
- **U**sability — Вимоги щодо зручності використання.
- **R**eliability - Вимоги до надійності.
- **P**erformance - Вимоги до продуктивності.
- **S**upportability — Вимоги до підтримки.

### Посилання

- [Стейкхолдер проєкту](https://wizeclub.education/blog/stejkholderi-proyektu-hto-taki-ta-chomu-vazhlivo-nalagoditi-z-nimi-komunikatsiyu/)
- [Бізнес-актори](https://ebrary.net/73275/computer_science/business_actors_business_workers)
- [Бізнес-працівники](https://ebrary.net/73275/computer_science/business_actors_business_workers)
- [FURPS](https://en.wikipedia.org/wiki/FURPS)

## Короткий зміст

**[Характеристика ділових процесів](#характеристика-ділових-процесів)**

**[Бізнес-сценарії](#бізнес-сценарії)**

**[Короткий огляд продукту](#короткий-огляд-продукту)**

**[Функціональність](#функціональність)**

**[Практичність](#практичність)**

**[Надійність](#надійність)**

**[Продуктивність](#продуктивність)**

**[Експлуатаційна придатність](#експлуатаційна-придатність)**

## Характеристика ділових процесів

До зовнішніх факторів (бізнес-акторів) належать:
- Клієнти;
- Постачальники;
- Партнери;
- Потенційні клієнти («ринок»);
- Місцева влада.

До внутрішніх факторів (бізнес-робітників) належать:
- Тімлід - це керівник команди. Володіючи технічними знаннями, він організовує та координує дії команди, мотивує та контролює всі етапи розробки продукту. 
- Розробник (робітник) - це фахівець, який відповідає за програмування та розробку продукту або послуги. Він здатний перетворювати концепції в функціональні програмні рішення, використовуючи свої технічні знання та навички.
- Адміністратор - це особа, яка відповідає за управління та підтримку інформаційних систем або мережі.
   
## Бізнес-сценарії

### UserSignUp
| **ID**            | **UserSignUp** |
|:-----------------:|:---|
| Назва             | Зареєструвати користувача |
| Учасники          | Користувач, Система |
| Передумови        | Користувач не зареєстрований у системі |
| Результат         | Створений обліковий запис користувача |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля </br>AccountAlreadyExistException - Обліковий запис с такими данними вже існує </br>BadPasswordException - Користувач увів пароль, який не відповідає вимогам |
| Основний сценарій |  1. Користувач заходить на сторінку створення облікового запису </br> 2. Користувач заповнює всі поля</br> 3. Користувач натискає кнопку "Реєстрація" (можливі NullReferenceException, BadPasswordException)</br> 4. Перевірка наявності облікового запису з ідентичними даними у базі даних (можливо AccountAlreadyExistException)</br> 5. Створення облікового запису, внесення даних до бази </br> 6. Користувач переходить на головну сторінку системи під своїм обліковим записом |

### UserLogIn
| **ID**            | **UserLogIn** |
|:-----------------:|:---|
| Назва             | Авторизувати користувача |
| Учасники          | Користувач, Система |
| Передумови        | Користувач вже зареєстрований у системі |
| Результат         | Авторизація користувача до системи |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля </br> InvalidAccountException - Неправильно задано логін або пароль / користувача не існує в базі даних|
| Основний сценарій | 1. Користувач заходить на сторінку входу до облікового запису </br> 2. Користувач заповнює всі поля</br> 3. Користувач натискає кнопку "Увійти" (можливі NullReferenceException, InvalidAccountException)</br> 4. Перевірка наявності облікового запису з ідентичними даними у системі (можливо InvalidAccountException)</br> 5. Користувач переходить на головну сторінку системи під своїм обліковим записом |

### UserEdit
| **ID**            | **UserEdit** |
|:-----------------:|:---|
| Назва             | Редагувати профіль |
| Учасники          | Користувач, Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Редакція даних користувача у системі |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля </br> BadPasswordException - Користувач увів пароль, який не відповідає вимогам |
| Основний сценарій | 1. Користувач заходить на сторінку облікового запису </br> 2. Користувач натискає кнопку "Редагувати дані" </br> 3. Користувач заповнює всі поля</br> 4. Користувач натискає кнопку "Змінити" (можливі NullReferenceException, BadPasswordException)</br> 5. Система зберігає нові дані |

### UserDelete
| **ID**            | **UserDelete** |
|:-----------------:|:---|
| Назва             | Видалити користувача |
| Учасники          | Користувач, Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Видалення даних користувача з системи |
| Виключні ситуації | IncorrectPasswordException - Користувач увів неправильний пароль |
| Основний сценарій | 1. Користувач заходить на сторінку облікового запису </br> 2. Користувач натискає кнопку "Вилалити запис" </br> 3. Користувач вводить пароль для підтвердження (можливо IncorrectPasswordException) </br> 4. Користувач натискає кнопку "Видалити" </br> 5. Система видаляє користувача |

### CreateProject
| **ID**            | **CreateProject** |
|:-----------------:|:---|
| Назва             | Створити проєкт |
| Учасники          | Користувач (тімлід), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Створення проєкту в системі |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач натискає кнопку "Створити проєкт" </br> 3. Користувач заповнює всі поля </br> 4. Користувач натискає кнопку "Створити"     (можливо NullReferenceException) </br> 5. Система створює новий проєкт |

### EditProject
| **ID**            | **EditProject** |
|:-----------------:|:---|
| Назва             | Редагувати проєкт |
| Учасники          | Користувач (тімлід), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Редагування проєкту в системі |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач натискає кнопку "Редагувати дані" </br> 4. Користувач заповнює всі поля </br> 5. Користувач натискає кнопку "Редагувати" (можливо NullReferenceException) </br> 6. Система зберігає нові дані |

### DeleteProject
| **ID**            | **DeleteProject** |
|:-----------------:|:---|
| Назва             | Видалити проєкт |
| Учасники          | Користувач (тімлід), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Видалення проєкту з системи |
| Виключні ситуації | IncorrectPasswordException - Користувач увів неправильний пароль |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач натискає кнопку "Видалити проєкт" </br> 4. Користувач вводить свій пароль для підтвердження </br> 5. Користувач натискає кнопку "Видалити" (можливо IncorrectPasswordException) </br> 6. Система видаляє проєкт |

### AddUser
| **ID**            | **AddUser** |
|:-----------------:|:---|
| Назва             | Додати іншого користувача у проєкт |
| Учасники          | Користувач (тімлід), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Користувача додано у проєкт |
| Виключні ситуації | AccessDeniedException - Користувач не має відповідних прав </br> NoUserFoundException - Неможливо знайти користувача за вказаним ім'ям. |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач натискає кнопку "Додати нового учасника" (можливо AccessDeniedException) </br> 4. Користувач шукає іншого учасника за його ім'ям (можливо NoUserFoundException) </br> 5. Користувач натискає кнопку "Додати" </br> 6. Система додає нового користувача |

### DeleteUser
| **ID**            | **DeleteUser** |
|:-----------------:|:---|
| Назва             | Видалити користувача з проєкту |
| Учасники          | Користувач (тімлід), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Користувача видалено з проєкту |
| Виключні ситуації | AccessDeniedException - Користувач не має відповідних прав </br> |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач натискає кнопку "Видалити користувача" (можливо AccessDeniedException) </br> 4. Користувач обирає іншого учасника за його ім'ям </br> 5. Користувач натискає кнопку "Видалити" </br> 6. Система видаляє користувача |

### CreateTask
| **ID**            | **CreateTask** |
|:-----------------:|:---|
| Назва             | Створити завдання |
| Учасники          | Користувач (тімлід, розробник), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Створення завдання в проєкті |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач натискає кнопку "Створити завдання" </br> 4. Користувач заповнює всі поля </br> 5. Користувач натискає кнопку "Створити" (можливо NullReferenceException) </br> 6. Система створює нове завдання |

### EditTask
| **ID**            | **EditTask** |
|:-----------------:|:---|
| Назва             | Редагувати завдання |
| Учасники          | Користувач (тімлід, розробник), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Редагування завдання в проєкті |
| Виключні ситуації | NullReferenceException - Користувач не заповнив усі обов'язкові поля |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач обирає завдання </br> 4. Користувач натискає кнопку "Редагувати дані" </br> 5. Користувач заповнює всі поля </br> 6. Користувач натискає кнопку "Редагувати" (можливо NullReferenceException) </br> 7. Система зберігає нові дані |

### DeleteTask
| **ID**            | **DeleteTask** |
|:-----------------:|:---|
| Назва             | Видалити завдання |
| Учасники          | Користувач (тімлід, розробник), Система |
| Передумови        | Користувач авторизований в системі |
| Результат         | Видалення завдання з проєкту |
| Виключні ситуації | IncorrectPasswordException - Користувач увів неправильний пароль |
| Основний сценарій | 1. Користувач заходить на сторінку управління проєктами </br> 2. Користувач обирає проєкт та заходить на його сторінку </br> 3. Користувач обирає завдання </br> 4. Користувач натискає кнопку "Видалити завдання" </br> 5. Користувач вводить свій пароль для підтвердження </br> 6. Користувач натискає кнопку "Видалити" (можливо IncorrectPasswordException) </br> 7. Система видаляє завдання |

## Короткий огляд продукту
**Системою управління проєктами** називають програмне забезпечення, що створене для планування, контролю та автоматизації відстеження статусу робочого процесу.

**swiftAID** - система управління проєктами, спрямована на покращення ефективності управління проєктами в різних галузях діяльності.

**Основні користувачі системи:**
- Керівники проєктів (тімліди) - відповідають за загальне управління та координацію проектів. Вони використовують систему для організації, відстеження та контролю ходу реалізації проектів.
- Учасники проєктів (розробники) - мають відповідальність за виконання конкретних завдань у рамках проектів.
- Клієнти - отримують продукти або послуги, що розробляються в рамках проектів. Вони можуть використовувати систему для відстеження прогресу реалізації проектів.

**Основні вимоги до системи:**
- 

## Функціональність

Всі функціональні можливості нашої системи управління проектами представлені через різноманітні інтерфейси, призначені для різних категорій користувачів. 

### Інтерфейс звичайного користувача
Інтерфейс звичайного користувача включає в себе:
- можливість зареєструвати новий обліковий запис
- можливість увійти в обліковий запис
- керувати своїм обліковим записом (редагувати дані, видалити)
- створити новий проєкт 
- оглядати інші проєкти

### Інтерфейс розробника
У випадку, якщо користувача додали до проєкту, він стає його розробником. Інтерфейс розробника додає можливості:
- створювати завдання
- редагувати завдання
- видаляти завдання
- відстежувати прогрес виконання проєкту

### Інтерфейс керівника
У випадку, якщо користувач створює власний проєкт, він стає його керівником. Інтерфейс тімліда розширює можливості розробника:
- додавати користувачів до проєкту
- видаляти користувачів з проєкту
- редагувати інформацію про проєкт
- видалення проєкту


## Практичність

- Підтримка декількох мов
- Зручний та зрозумілий інтерфейс
- Кросплатформеність
- Інтеграція з популярними інструментами розробки та управління

## Надійність

- Система доступу на основі ролей
- Можливість створювати приватні та публічні проєкти
- Багаторівнева автентифікація
- Резервування даних

## Продуктивність

- Швидкий та ефективний доступ до всієї необхідної інформації та функціоналу системи
- Можливість розподілення завдань та ресурсів між учасниками проекту
- Кешування даних
- Розподілення і обмеження ресурсів для кожного проєкту 

## Експлуатаційна придатність

- Наявність інтуїтивного інтерфейсу та документації для швидкого навчання нових користувачів.
- Підтримка для оперативного вирішення проблем та підтримки користувачів у разі потреби.
- Регулярних оновлення та покращення
