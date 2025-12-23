
# NexoSmart -- Portfolio extendido
Este es el repositorio del proyecto del portfolio extendido de NexoSmart. Su principal objetivo es permitir la fácil creación y edición de los proyectos mostrados en el portfolio de la empresa, buscando reducir al máximo el trabajo futuro que el mismo demanda.

## Instalación
Se clona el repositorio con `git clone (link repo)`, y luego se instalan las dependencias con `npm install`. Finalmente, se corre localmente con `npm run dev`.

## Funcionamiento principal
Dentro del directorio *./src/projects*, encontraremos un directorio específico para cada proyecto. En él, se encuentran dos tipos de archivos: un **index.json**, y uno o más **.mdx**

En el **index.json** se establece la definición principal de los bloques que se mostrarán. Cada bloque tiene parámetros que se pueden pasar, algunos opcionales, y otros requeridos. 

Algunos bloques utilizan archivos **.mdx**, los cuales se usan para proveer rich format text, o texto con formato libre. Esto significa que se pueden usar todas las features que provee el formato **Markdown (.md)** por default, y extenderlo con algunos otros formatos personalizables (más sobre esto abajo). 

Los recursos del proyecto (imágenes, videos, íconos, etc.), irán dentro del directorio *./src/public*, en un directorio específico de cada proyecto. Luego, se deben referenciar dentro del archivo **index.json** del mismo. 

A la hora de definir secciones dentro de un **index.json**, es importante saber que cada sección se define mediante un atributo *type*, cuyo valor será igual al prefijo de cada componente. Suena complejo, pero si quiero usar el componente "OverviewSection", entonces el *type* será "overview"; si quiero usar el componente "ItemsBannerSection", el *type* será "itemsBanner", etc. 

Dentro de cada componente, al inicio, se pueden ver los parámetros disponibles para pasar, y si son requeridos u opcionales.

## Funcionamiento interno
Dentro del directorio *./src/components/projects*, se encuentran los componentes principales del portfolio extendido. Podemos definir tres archivos principales:

 1. **mdx-content.tsx**: se encarga de renderizar correctamente los archivos **.mdx**. En este archivo, dentro del objeto *components*, se pueden definir componentes para utilizar dentro de cada **.mdx**.
 2. **ProjectRenderer.tsx**: se encarga de renderizar las secciones, no es necesario modificarlo.
 3. **sections.tsx**: se encarga de definir las secciones que se pueden utilizar dentro de un **index.json**. Si se crea una nueva sección, debe añadirse al objeto "SECTION_COMPONENTS".

Finalmente, en el subdirectorio "sections", podemos entrar a cada sección como un componente individual. 

## Conclusión y cosas a tener en cuenta
La idea principal de este proyecto, es facilitar el manejo de los proyectos mostrados en el portfolio de la empresa, incluso permitiendo que no haga falta meterse a tocar código para añadir o editar proyectos. 

Cualquier sección que se creé nueva o se edite, debe mantener dos principios obligatorios: ser responsive, y ser escalable. Se requiere un énfasis especial en escalable, buscando que sea coherente para su uso dentro de todos los proyectos que puedan utilizarlo. 