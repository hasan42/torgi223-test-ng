# Comments

на Angular 8 сделать приложение которое динамически выводит древовидные комментарии в качестве структуры комментариев можно использовать статические json файл но он должен быть получен с помошью GET запроса. (можно использовать Mock)

Структура Комментария  
• id  
• parent_id  
• date time  
• author_name  
• body

Комментарии должны отображатся с отсутпом по уровню вложенности, уровень вложенности не ограничен, но после 3 уровня вложности можно необращать внимания на верстку элементов.  
На каждый комментарий можно добавить ответ. (комментарии можно хранить в localStorage либо еще где то на ваш выбор)  
Можно использовать любой удобный генератор тестовых данных чтобы сгенерировать комментарии.  
В качестве фреймворка нужно использовать bootstrap4.  
Результаты задания должны быть выложены на github