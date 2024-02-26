# **Informe de la práctica 5: Objetos, clases e interfaces**

**Author:** Daniel Garvi Arvelo

**Contacto:** alu0101501338@ull.edu.es

**Asignatura:** Desarrollo de Sistemas Informáticos

**Enlaces de interes:** 

[Guión de práctica #5](https://ull-esit-inf-dsi-2324.github.io/prct05-objects-classes-interfaces/)

[Guión de práctica #4](https://ull-esit-inf-dsi-2324.github.io/prct04-arrays-tuples-enums/)

## **Introducción**

En este informe se documenta la realización de 2 ejercicios en TypeScript usando varias clases e interfaces, cada una de ellas separada en su propio fichero.

A continuación se describe la implementación realizada para cada ejercicio:

## **Ejercicio 1**

El ejercicio 1 consiste en implementar un conjunto de clases e interfaces que permitan representar un gestor de referencias bibliográficas que permita gestionar información sobre diferentes tipos de elementos bibliográficos.

El objetivo principal fue crear una clase `BibliographicManager` que permita agregar, buscar y exportar elementos bibliográficos en varios formatos. Además, se definieron interfaces y clases para diferentes tipos de elementos bibliográficos como libros, capítulos de libros, artículos de revistas, patentes, contribuciones a congresos, recursos electrónicos y proyectos finales.

A continuación, veremos las interfaces y clases implementadas:

1. **BibliographicElement Interface**:
    - Se definió la interfaz `BibliographicElement` con propiedades comunes para todos los elementos bibliográficos, como título, autores, palabras clave, resumen, fecha de publicación, páginas y editor.
    - También se incluyó el método `getIEEEFormat()` para obtener el formato IEEE de cada elemento.

2. **Clase BibliographicManager**:
    - Se creó la clase `BibliographicManager` que permite gestionar una colección de elementos bibliográficos.
    - Métodos:
      - `getElements()`: Retorna todos los elementos en el `BibliographicManager`.
      - `addElement(element)`: Agrega un nuevo elemento al `BibliographicManager`.
      - `printFullTable()`: Imprime una tabla completa de todos los elementos.
      - `printTable(result)`: Imprime una tabla basada en un resultado de búsqueda.
      - Métodos de búsqueda (aplican un filtro y devuelven un nuevo array):
        - `searchByKeyword(keyword)`: Busca elementos por palabra clave.
        - `searchByTitle(title)`: Busca elementos por título.
        - `searchByAuthor(author)`: Busca elementos por autor.
        - `searchByPublicationDate(date)`: Busca elementos por fecha de publicación.
        - `searchByPublisher(publisher)`: Busca elementos por editor.
        - `exportIEEEFormat(element)`: Exporta los elementos como referencia en su correspondiente formato IEEE.

3. **Clases de Elementos Bibliográficos**:
   - Se implementaron clases para diferentes tipos de elementos bibliográficos, cada una implementando la interfaz `BibliographicElement`, añadiendo nuevos atributos particulares de ese elemento y proporcionando su propio formato IEEE:
     - `Book`
     - `BookChapter`
     - `CongressContribution`
     - `ElectronicResources`
     - `FinalProject`
     - `JournalArticle`
     - `Patent`
     - `Thesis`

### **Comparación con otros gestores de elementos bibliográficos**

En primer lugar, tanto en Zotero como Mendeley tenemos una interfaz gráfica que nos permite interactuar de forma más sencilla con el gestor, también permite añadir flags o poner elementos en favoritos, organizar los elementos en carpetas, compartirlos, etc... Funcionalidades que nuestra implementación básica no tiene.

## **Ejercicio 2**

El ejercicio 2 consiste en crear una serie de clases e interfaces que nos permita automatizar la creación de menús saludables siguiendo una de tres heuristicas posibles que ordenan los platos de forma distinta. Este ejercicio esta basado en el ejercicio 10 de la práctica 4 [Guión de práctica #4](https://ull-esit-inf-dsi-2324.github.io/prct04-arrays-tuples-enums/)

A continuación veremos las interfaces y clases implementadas:

Aquí está el análisis del código para el ejercicio 2:

1. **Interfaz Dish**:
   - Definimos una interfaz `Dish` para representar un plato, tiene dos propiedades: `nutriScore` y `unhealthyScore`, ambas de tipo `number`.

2. **Clase MenuInstance**:
   - Representa una instancia de menú que contiene un array de objetos `Dish`.
   - Tiene un constructor que recibe un array de `Dish` y lo asigna a la propiedad `dishes`.

3. **Clase MenuSolution**:
   - Representa una solución de menú que contiene los platos seleccionados según la heurística aplicada, el total de nutriScore y el total de unhealthyScore.
   - Tiene un constructor que recibe un array de `Dish` seleccionados, el total de nutriScore y el total de unhealthyScore.

4. **Clase Solver**:
   - Representa la clase `Solver` que proporciona métodos para resolver problemas de optimización de menús.
   - Contiene tres métodos heurísticos (`heuristic1`, `heuristic2`, `heuristic3`) para ordenar los platos (son los creados en la Práctica 4).
   - `heuristic1` ordena los platos en orden descendente según `nutriScore`.
   - `heuristic2` ordena los platos en orden ascendente según `unhealthyScore`.
   - `heuristic3` ordena los platos en función de la proporción `nutriScore / unhealthyScore` en orden descendente.
   - El método `createMenu` crea una solución de menú basada en la instancia de menú dada, la heurística y el puntaje máximo de `unhealthyScore`.
     - Ordena los platos usando la heurística seleccionada.
     - Itera sobre los platos ordenados y los agrega a la solución si no excede el puntaje máximo de `unhealthyScore`.
     - Devuelve una nueva instancia de `MenuSolution` con los platos seleccionados y los totales de `nutriScore` y `unhealthyScore`.

## **Ejercicio PE1**

Este ejercicio consistia en crear una función que, dado un numero entero positivo, nos diga qué alergenos de los contenidos en un enum se corresponden a ese numero.

1. **Enum `knownAlergens`**:
   - Define un enum que representa los alérgenos contemplados en el análisis.
   - Cada alérgeno tiene un valor asociado que es una potencia de 2. Esto permite que cada alérgeno sea representado por un único bit en la puntuación de alérgenos.
   - Los alérgenos y sus valores son:
     - 'Huevo' = 1,
     - 'Cacahuete' = 2,
     - 'Marisco' = 4,
     - 'Fresa' = 8,
     - 'Tomate' = 16,
     - 'Chocolate' = 32,
     - 'Polen' = 64,
     - 'Gato' = 128.

2. **Función `getAllergens`**:
   - Es una función que toma un número entero positivo que representa una puntuación de alérgenos y devuelve una lista de los alérgenos que se corresponden con esa puntuación.
   - Toma `alergensScore` como argumento, que es un número entero.
   - Verifica si `alergensScore` es un número entero positivo. Si no lo es, devuelve `undefined`.
   - Itera sobre cada elemento en el enum `knownAlergens`.
     - Comprueba si el valor es un número (ya que los enums pueden tener keys y values).
     - Convierte la key en un número (`alergenValue`) y verifica si ese bit está presente en la puntuación de alérgenos (`alergensScore`).
     - Si el bit está presente, agrega el alérgeno correspondiente al array `alergens`.
   - Devuelve la lista de alérgenos correspondientes a la puntuación de alérgenos.

## **Ejercicio PE2**

Este ejercicio consistia en crear una clase NeveraInteligente que guarde alimentos y bebidas, que te permite añadir o quitar elementos, y que lleve una cuenta de cada uno de estos de modo que cuando llegue a 0 añada dicho elemento a una lista de la compra.

Los detalles de la implementación son:

1. **Interfaz `ElementInFridge`**:
   - Define una interfaz que contiene dos propiedades comunes:
     - `name`: Una cadena que representa el nombre del elemento.
     - `nutritionalInfo`: Una cadena que representa la información nutricional del elemento.

2. **Clases `Alimento` y `Bebida`**:
   - Ambas clases implementan la interfaz `ElementInFridge`, por lo que deben tener propiedades `name` y `nutritionalInfo`.
   - `Alimento`:
     - Representa un alimento con su nombre, información nutricional y cantidad en gramos.
     - Tiene una propiedad adicional `grams` que representa la cantidad en gramos del alimento.
   - `Bebida`:
     - Representa una bebida con su nombre, información nutricional y cantidad en litros.
     - Tiene una propiedad adicional `liters` que representa la cantidad en litros de la bebida.

3. **Tipos `FoodItem` y `FoodItemNumber`**:
   - `FoodItem`: Es un tipo que puede ser `Bebida` o `Alimento`, representando un elemento en la nevera.
   - `FoodItemNumber`: Es un tipo que representa un par de `FoodItem` y un número que corresponde a la cantidad disponible en la nevera.

4. **Clase `SmartFridge`**:
   - Representa una nevera inteligente que tiene una lista de alimentos/bebidas y sus cantidades, así como una lista de la compra.
   - Constructor:
     - Recibe una lista de tuplas `FoodItemNumber` para inicializar los elementos en la nevera.
     - Itera sobre los elementos iniciales y, si la cantidad es 0, agrega el elemento a la lista de la compra (`shoppingList`).
   - Propiedad `shoppingList_`:
     - Es un getter que devuelve la lista de la compra.
   - Método `consumeItem`:
     - Consume un producto dado su nombre.
     - Busca el producto por nombre y si la cantidad es mayor que 0, la reduce en uno.
     - Si la cantidad se reduce a 0, agrega el producto a la lista de la compra.
   - Método `reposeItem`:
     - Repone un alimento en la nevera dado su nombre.
     - Busca el producto por nombre y aumenta su cantidad en uno.
   - Método `addItem`:
     - Añade un nuevo elemento (`FoodItem`) a la nevera con una cantidad inicial de 1.

# **Conclusiones y Problemas Enfrentados**
En esta práctica se han realizado dos ejercicios para afianzar conocimientos acerca de clases e interfaces.

La mayor dificultad que encontré yo, fue instanciar los objetos de elementos gráficos, ya que resultó muy tedioso y cansino.

# **Bibliografía**

[Guión de práctica #4](https://ull-esit-inf-dsi-2324.github.io/prct04-arrays-tuples-enums/)

[Guión de práctica #5](https://ull-esit-inf-dsi-2324.github.io/prct05-objects-classes-interfaces/)
