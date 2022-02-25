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

Copie el siguiente código Json y péguelo en el body de entrada en su cliente HTTP despues ejecute la llamada (para ver lo resultados revise la imagén al inicio de éste documento).

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

cd npm run test
```
**Importante:**La versión 2 (V2) de las APIs cuentan con seguridad por token por lo cual es necesario colocar el siguiente token como headers. 
```sh
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.MSqeevVdGlsk-I0bn1VkqmbE1t9e87OD7rkYvtQQAsk
```
**Nota:** La versión 2 (V2) de las APIs que cuentan con seguridad también está implementada en la versión para docker.


