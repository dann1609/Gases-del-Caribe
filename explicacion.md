# Explicación de las pruebas lógicas para Gases del Caribe

## Configuracion
Para correr solo necesita ejecutar el comando <code>node [nombre_del_archivo.js] </code> o copiar y pegar en [jsconsole](https://jsconsole.com/)
<br>
<br>
<br>
## 1. El parqueadero
Este código se encuentra en el archivo <code>parqueadero.js</code>

El código comienza con la constante input que almacena los valores que se usaran como entrada para nuestro código.
Se obtiene el numero de datasets y después un array con los datasets.
Se realiza un loop para simular cada dataset.

En la simulación se crea un array para el parking y otro para los carros que esperan y se ejecutan las instrucciones según el requerimiento. 
Para simular el movimiento de los vehículos se mueve el ultimo elemento de la lista parking a la primera posición.
Cuando un carro estaciona, se agrega el valor del carro y el sitio en el parqueadero a un objeto que contiene los resultados finales.

Al final para obtener la instrucciones se hace un loop de los vehículos iniciales y se verifica si el vehículo existe en el objeto que contiene los resultados.

Se concatenan los resultados de las diferentes simulaciones y se devuelven.
<br>
<br>
<br>
## 2. Toboganes y escaleras

Este código se encuentra en el archivo <code>toboganesEscaleras.js</code>

El código comienza con la constante input que almacena los valores que se usaran como entrada para nuestro código.
Se obtiene después la secuencia de dados y un array con los diferentes juegos.

Se simulan en un loop los juegos. Donde se ejecutan las instrucciones según el requerimiento.
Se verifican las condiciones especiales como los toboganes, escaleras, tiros dobles y perdida del siguiente turno.
Para emular el cambio de turno mueve el primer jugador de la lista al ultimo puesto del array.

Para simular un turno doble se ubica el jugador de nuevo en la primera posición.

Al momento de que un jugador cumpla la condición = 100 se detiene el juego y se devuelve el numero del jugador. Si ningún jugador gana se devuelve un 0.

Se concatenan al final los resultados de las diferentes simulaciones.
<br>
<br>
<br>
## 4. Materia Oscura

Este código se encuentra en el archivo <code>materiaOscura.js</code>

El código comienza con la constante input que almacena los valores que se usaran como entrada para nuestro código.
Se procesa la entrada y se divide en un array que contiene objetos que contiene 2 propiedades, una contiene el numero de viajes, y la otra contiene un array que contiene un objeto con la duración y el numero de paquetes de materia oscura que da ese viaje.

Se Realiza un loop y se simulan los viajes. Donde se ejecuta los requerimientos del documento. Para obtener la mejor velocidad se prueban todas las posibles condiciones entre no dar materia oscura en ningún viaje hasta dar materia oscura en todos los viajes.
Se comprueba que efectivamente exista reserva de materia oscura en la simulación.
Se comparan resultados y se van remplazando en la medida que se obtiene un menor tiempo.
Se devuelve el menor tiempo para cada simulación.

Se concatenan los resultados de las diferentes simulaciones.
<br>
<br>
<br>
## 5. La Ruleta Digital

Este código se encuentra en el archivo <code>ruletaDigital.js</code>

El código comienza con la constante input que almacena los valores que se usaran como entrada para nuestro código.
Se procesa la entrada y se divide en un array que contiene objetos con un array con las constantes a y las otras constantes como propiedades.
Se simula cada elemento de dicho array.

Se hace un loop m + 1 veces y se obtiene el valor de la ruleta para cada valor de m, se utiliza el array de a cómo los coeficientes del polinomio.
Se almacenan los posibles resultados en un objeto para evitar repeticiones y se devuelve la cantidad de keys de ese objeto.

Se concatenan los resultados de las diferentes simulaciones.

