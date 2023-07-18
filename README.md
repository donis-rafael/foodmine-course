# Proyecto Avanzado de Angular

# Rafael Morales

* Desarrollo de **frontend** en *Angular*
* Desarrollo de **backend** en *NodeJs*

## Descripción de proyecto
Este es un proyecto tipo ECommerce que fue realizado como continuación de un proceso de aprendizaje, este proyecto contiene funciones más avanzadas de Angular, como la creación de diferentes componentes principales como auxiliares, manejo de servicios y consumo de un backend, en la parte inferior de este apartado se encuentra la fuente de aprendizaje y el proceso que se llevó a cabo y al cual se llegó en el desarrollo del mismo.

******

El código fuente se encuentra en la rama **dev** del repositorio: [Proyecto Avanzado de Angular](https://github.com/donis-rafael/foodmine-course/tree/dev)

******
******

## Guía de aprendizaje

Título | Enlace | Descripción
---|---|---
*The Ultimate Angular and Nodejs Tutorial For Beginners* | https://www.youtube.com/watch?v=NFh9WEH0Zi4 | Angular and Node ECommerce Course 2022 - Build Full ECommerce Website By Angular, Nodejs, and Mongodb For All Level Developers

## Lessons
1. Introduction to the course
2. Install development tools
3. Create Angular App
    1. Create project's folder
    2. Install @angular/cli
    3. Create App as frontend
4. Add Header
    1. Generate component
    2. Add HTML
    3. Add CSS

---------------
5. List Foods
    1. Create Food Model
    2. Create data.ts
        1. Add sample foods
    3. Add images to assets
    4. Create Food service
    5. Create home component
        1. Add ts
        2. Add HTML
        3. Add CSS

---------------
6. Search
    1. Add method to Food service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add HTML
        4. Add CSS
    
---------------
7. Tags Bar
    1. Create tag model
    2. Add sample tags to data.ts
    3. food service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate tags component
        1. Add to home component
        2. Add ts
        3. Add HTML
        4. Add CSS

---------------
8. Food page
    1. Add method to food service
    2. Generate food page component
        1. Add Route
        2. Add ts
        3. Add HTML
        4. Add CSS

---------------
9. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart Service
    4. Add to cart button in food page
    5. Create cart page component
        1. Add Route
        2. Add ts
        3. Add HTML
        4. Add CSS

---------------
10. Not Found!
    1. Generate components
        1. Add ts
        2. Add HTML
        3. Add CSS
    2. Add to Pages
        1. Home Page
        2. Food Page
        3. Cart Page

---------------
11. Connect To Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. Add Apis
    9. npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service