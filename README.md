# CRUD Grand League Championship

_Este proyecto permite gestionar un CRUD (Crear, Leer, Actualizar, Eliminar) de equipos de fútbol, utilizando una base de datos para almacenar la información relevante de cada equipo._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

- **Node.js** - Necesario para ejecutar el backend.
- **MySQL** - Para manejar la base de datos.
- **Postman** - Para probar las APIs.

```bash
# Asegúrate de tener Node.js y MySQL instalados en tu máquina
node -v
mysql -V
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutándose_

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Vitolofs7/grandLeague.git
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd grandLeague
   ```

3. Instala las dependencias del backend:

   ```bash
   cd backend
   npm install
   cd frontend
   npm install
   ```

4. Crea la base de datos en MySQL:

   ```sql
   CREATE DATABASE db_grandleague;
   ```

5. Inserta datos de ejemplo en la base de datos:

   ```sql
   INSERT INTO team (teamname, coach, category, numberOfPlayers) VALUES 
   ('Real Madrid', 'Carlo Ancelotti', 'La Liga', 25),
   ('Manchester United', 'Erik ten Hag', 'Premier League', 25),
   ('Bayern Munich', 'Thomas Tuchel', 'Bundesliga', 25), 
   ('Paris Saint-Germain', 'Luis Enrique', 'Ligue 1', 25),
   ('Juventus', 'Massimiliano Allegri', 'Serie A', 25),
   ('Inter Milan', 'Simone Inzaghi', 'Serie A', 25);
   ```

6. Inicia el servidor del backend y el frontend:

   ```bash
   cd backend
   node index.js
   cd frontend
   ionic serve
   ```

## Construido con 🛠️

* [Express](https://expressjs.com/) - El framework web usado para el backend.
* [MySQL](https://www.mysql.com/) - Base de datos utilizada.
* [Postman](https://www.postman.com/) - Para probar las APIs.
* [Ionic](https://ionicframework.com/) - Framework para desarrollar aplicaciones móviles.
* [Sequelize](https://sequelize.org/) - ORM utilizado para interactuar con la base de datos.

### Enlace a POSTMAN con los accesos a los end-points

Puedes encontrar los enlaces en: [Postman API Documentation](https://documenter.getpostman.com/view/38432313/2sAXxLCaB4).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Victor Felipe Suárez** - *Trabajo Inicial* - [Vitolofs7](https://github.com/Vitolofs7)

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles.

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Dona con cripto a esta dirección: `0xf253fc233333078436d111175e5a76a649890000`
* etc.

---
⌨️ con ❤️ por [Vitolofs7](https://github.com/Vitolofs7) 😊
