# Prueba tećnica To Do List

TO DO List usando Node JS bara el backend y Vue 3 para frontend y MongoDB para el manejo de base de datos.


## Backend

Instalación de dependencias mediante npm para levantar el proyecto backend desarrollado con Node JS y MongoDB.

```bash
  npm install
```
Agregar variables de entorno en el proyecto.
    
```bash
  PORT=8080
  DATABASE_URL='url-local
```

### URI de base de datos MongoDB

![App Screenshot](https://i.postimg.cc/9X7r7g1D/Screenshot-from-2024-01-22-11-35-21.png)

El siguiente paso será crear la base de datos con su respectiva colección desde MongoDB Compass (o el programa preferido para gestión de bases de datos con MongoDB:
![App Screenshot](https://i.postimg.cc/zBTYnVdP/Captura.png)

```bash
  npm run dev
```
El proyecto backend estará corriendo en el dominio local http://localhost:8080/api, donde se proporciona la colección de Postman y la colección de MongoBD mediante correo electrónico con los endpoints y las colecciones para poder realizar las solicitudes HTTP y gestionar las operaciones CRUD desde el backend.


# Frontend
Instalación de dependencias mediante npm para levantar el proyecto frontend desarrollado con Vue 3 y Tailwind 3 para los estilos del proyecto.

```bash
  cd task_frontend
  npm install
  npm run dev
```
El proyecto frontend estará corriendo en el dominio local http://localhost:3000, donde se podrán realizar las operaciones CRUD desde interfaz de usuario.

### Vista de proyecto

![App Screenshot](https://i.postimg.cc/yYFkNVzf/Screenshot-from-2024-01-22-12-00-12.png)

