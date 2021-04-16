# apoyo_alimentario_crud

API CRUD para el registro de la asistencia al servicio de apoyo alimentario

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones
* [NestJS](https://github.com/nestjs/nest)
* [MongoDB](https://github.com/mongodb/mongo)
* [Docker](https://docs.docker.com/engine/install/ubuntu/)
* [Docker Compose](https://docs.docker.com/compose/)

### Variables de Entorno
```shell
APOYO_ALIMENTARIO_CRUD_USER=[Usuario de BD]
APOYO_ALIMENTARIO_CRUD_PASS=[Contraseña del usuario de BD]
APOYO_ALIMENTARIO_CRUD_HOST=[URL, Dominio o EndPoint de la BD]
APOYO_ALIMENTARIO_CRUD_PORT=[Puerto de la BD]
APOYO_ALIMENTARIO_CRUD_DB=[Nombre de Base de Datos]
APOYO_ALIMENTARIO_CRUD_DB=[Nombre de Base de Datos de Autenticación]
APOYO_ALIMENTARIO_CRUD_HTTP_PORT=[Puerto de exposición del API]
```
**NOTA:** Las variables se pueden ver en el fichero conf/app.conf y están identificadas con APOYO_ALIMENTARIO_CRUD...

### Ejecución del Proyecto
```shell
#1. Obtener el repositorio con nest
git clone https://github.com/udistrital/apoyo_alimentario_mongo_crud

#2. Moverse a la carpeta del repositorio
cd apoyo_alimentario_mongo_crud

# 3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

4. Instalar dependencias
npm install
#o
npm i

# 5. Alimentar todas las variables de entorno que utiliza el proyecto.
APOYO_ALIMENTARIO_CRUD_HTTP_PORT=8080
APOYO_ALIMENTARIO_CRUD_HOST=127.0.0.1:27017 APOYO_ALIMENTARIO_CRUD_SOME_VARIABLE=some_value nest run
```
### Ejecución Dockerfile
```shell
# Implementado para despliegue del Sistema de integración continua CI.
```

### Ejecución docker-compose
```shell
#1. Clonar el repositorio
git clone -b develop https://github.com/udistrital/apoyo_alimentario_mongo_crud

#2. Moverse a la carpeta del repositorio
cd apoyo_alimentario_mongo_crud

#3. Crear un fichero con el nombre **custom.env**
touch custom.env

#4. Crear la network **back_end** para los contenedores
docker network create back_end

#5. Ejecutar el compose del contenedor
docker-compose up --build

#6. Comprobar que los contenedores estén en ejecución
docker ps
```

### Ejecución Pruebas

Pruebas unitarias
```shell
# En Proceso
```

## Modelo de Datos
[Modelo de Datos Parametros](/database/sintomas_crud.png)

## Estado CI

| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/apoyo_alimentario_mongo_crud/status.svg?ref=refs/heads/develop)](https://hubci.portaloas.udistrital.edu.co/udistrital/apoyo_alimentario_mongo_crud) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/apoyo_alimentario_mongo_crud/status.svg?ref=refs/heads/relase/0.0.1)](https://hubci.portaloas.udistrital.edu.co/udistrital/apoyo_alimentario_mongo_crud) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/apoyo_alimentario_mongo_crud/status.svg?ref=refs/heads/master)](https://hubci.portaloas.udistrital.edu.co/udistrital/apoyo_alimentario_mongo_crud) |


## Licencia

This file is part of apoyo_alimentario_mongo_crud

apoyo_alimentario_mongo_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

 apoyo_alimentario_mongo_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with apoyo_alimentario_mongo_crud. If not, see https://www.gnu.org/licenses/.
