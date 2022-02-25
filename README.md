# Trips - Backend
### Desarrollado principalmente en **Node.js, MongoDB** y con despliegue en **Docker**.
#### Método GET
  ![alt text](https://github.com/vorellana/Trips-API/blob/main/resources/get_1.png?raw=true)
#### Método POST
  ![alt text](https://github.com/vorellana/Trips-API/blob/main/resources/post_1.png?raw=true)
#### Pruebas unitarias
  ![alt text](https://github.com/vorellana/Trips-API/blob/main/resources/test_1.png?raw=true)

## Instalación y uso (Despliegue y pruebas unitarias)
**Es un requisito tener instalado docker y docker-compose.** Si no los tiene puede revisar los siguientes enlaces para la instalación.
https://docs.docker.com/get-docker/
https://docs.docker.com/compose/install/
```sh
# descargamos el proyecto
git clone https://github.com/vorellana/Trips-API.git

# entramos a la carpeta del proyecto
cd Trips-API

# iniciamos el despliegue de los servicios de backend y database
docker-compose up -d 
```
Una vez finalizado el proceso de despliegue ya podemos utilizar la aplicación.

**Nota:** Se recomienda utilizar un cliente HTTP como Postman o similares para poder usar ambos métodos, POST y GET.
### Uso del método GET
En el cliente HTTP establecemos el método GET e ingresamos la siguiente URL
```sh
http://localhost:3000/api/trips/v1?start_gte=5&start_lte=100&distance_gte=0&limit=3&offset=5
```
Vemos que la URL contiene los parámetros de filtro y paginación.
Ejecutamos la llamada y para ver los resultados revise las imágenes al inicio de éste documento.
### Uso del método POST
En el cliente HTTP establecemos el método POST e ingresamos la siguiente URL
```sh
http://localhost:3000/api/trips/v1
```

Copie el siguiente código Json y péguelo en el body de entrada en su cliente HTTP después ejecute la llamada (para ver lo resultados revise la imagén al inicio de éste documento).

```
{
  "readings": [
    {
      "time": 10,
      "speed": 9,
      "speedLimit": 38,
      "location": {
        "lat": -33.580158,
        "lon": -70.567227
      }
    },
    {
      "time": 20,
      "speed": 26,
      "speedLimit": 20,
      "location": {
        "lat": -33.58013,
        "lon": -70.566995
      }
    },
    {
      "time": 30,
      "speed": 28,
      "speedLimit": 38,
      "location": {
        "lat": -33.580117,
        "lon": -70.566633
      }
    },
    {
      "time": 40,
      "speed": 13,
      "speedLimit": 38,
      "location": {
        "lat": -33.580078,
        "lon": -70.566408
      }
    },
    {
      "time": 50,
      "speed": 18,
      "speedLimit": 38,
      "location": {
        "lat": -33.580005,
        "lon": -70.566498
      }
    }

  ]
}
```
### Ejecutar pruebas unitarias

```sh
# Estando en la carpeta raíz del proyecto: Trips-API ahora ingresamos a la carpeta backend
cd backend

# y ejecutamos el **test** para la pruebas unitarias con **jest**
cd npm run test
```
**Nota:**Para ver los resultados revise las imágenes al inicio de éste documento.

### Despliegue en Heroku

Se desarrolló una versión especial para su despliegue en la plataforma **Heroku** la cual se encuentra activa y acontinuación se brindan las direcciones para poder acceder a ellas.
```sh
# GET V1
https://trips-api-vo.herokuapp.com/api/trips/v1?start_gte=5&start_lte=100&distance_gte=0&limit=3&offset=5

# POST V1
https://trips-api-vo.herokuapp.com/api/trips/v1

# GET V2
https://trips-api-vo.herokuapp.com/api/trips/v2?start_gte=5&start_lte=100&distance_gte=0&limit=3&offset=5

# POST V2
https://trips-api-vo.herokuapp.com/api/trips/v2
```
**Importante:**La versión 2 (V2) de las APIs cuentan con seguridad por token por lo cual es necesario colocar el siguiente token como headers. 
```sh
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.MSqeevVdGlsk-I0bn1VkqmbE1t9e87OD7rkYvtQQAsk
```
**Nota:** La versión 2 (V2) de las APIs que cuentan con seguridad también está implementada en la versión para docker.

## Tecnologías de desarrollo
Para el presente proyecto se utilizarón las siguientes tecnologías como librerías, frameworks, servicios en la nube, herramientas de despliegue entre otros.

### Backend
*  **Node.js:** Entorno en tiempo de ejecución para desarrollar el Backend en Javascript.
* **Express:** Framework e infraestructura web rápida, minimalista y flexible para Node.js. 
* **ESLint:** Herramienta para el análisis de código (corrige y sugiere buenas prácticas).
* **Mongoose:** Módulo para la conexión como cliente a MongoDB.
* **jsonwebtoken:** Implementación de JSON web Token para Node.js.
* **Nodemon:** Aplicación para reiniciar el servidor automáticamente después de cada cambio.
* **Morgan:** Middleware para ver por consola las peticiones HTTP.
* **node-geocoder:** Librería para geocodificación (trabaja sobre google maps).
### Database
*  **MongoDB:** Base de datos NoSQL orientado a documentos.

### Deployment
*  **Docker:** Tecnología de contenedores que posibilita la creación y el uso de contenedores.
*  **Docker Compose:** Herramienta que permite simplificar el uso de Docker y gestionar varios contenedores.
*  **GitHub**: Servicio de repositorio de código fuente en donde se encuentran almacenados todo el código del proyecto.
*  **Heroku**: Servicio en la nube para desplegar aplicaciones (se publicó una versión especial del proyecto en éste servicio)
*  **MongoDB Atlas**: Servicio en la nube de Base de Datos MongoDB (se publicó una versión especial de la base de datos en éste servicio)
## Características (lo requerido)
* La aplicación tiene implementada la API V1 con los métodos GET Y POST.
* El método GET tiene parámetos de filtros de búsqueda.
* El método GET tiene parámetos de paginación.
* El método POST genera un Trip a partir de los Readings de entrada.
* Los "Trips" generados cuentan con todos los campos requeridos.
* El campo "address" de "Trip" es obtenido a partir de la coordenadas.
* El campo "distance" de "Trip" es calculado a partir de la fórmula de distancia entre 2 puntos en un plano cartesiano.
* Se implementaron los test unitarios con la libreía jest.
* Se configuró la orquestación del despliegue con dockerfile y docker-compose.
## Mejoras
* La aplicación tiene implementada la API V2 con los métodos GET Y POST y cuenta con un mecanismo de seguridad por token (jwt).
* La respuesta del método GET contiene un objeto adicional "Pagination" para el manejo retroalimentativo de paginación.
* Se implementó un mayor manejo de errores con su respectivas respuestas para el cliente HTTP.
* Se desplegó una version especial de las APIs en Heroku.
* Se desplegó una version especial de la Base de Datos en MongoDB Atlas.
* La estructura principal del proyecto se maneja en 3 capas: routes,controlles y services.
* La Base de Datos que se despliega con Docker contiene datos por defecto para su rápido uso.
* El despliegue del Backend y Base de Datos en contenedores se realiza con un solo comando de docker-compose.