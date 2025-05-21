# Dashboard de equipos

## Mi enfoque

De acuerdo a lo que entendi del documento enviado, trate de llevar a cabo las vistas y funcionalidades basicas:

- Vista de Card de equipo.
- Navegacion por pestanias.
- visualizacion de insight de cada usuario.
- Boton para ver mas datos de los insights de cada usuario.
- Boton en la pestania de equipo para poder seleccionar el equipo actual
- Barra inferior para la visualizacion de los equipos seleccionados y el precio actual.
- Boton CTA para comprar.

Si bien la prueba es de  un solo componente, trate de armar una arquitectura hexagonal que permita escalar, simulando un proyecto completo.
Modele los tipos de datos, de acuerdo al enunciado, y las vistas que iba a tener que desarrollar. Los datos de prueba, los traigo de un archivo .ts en el componente page, para la prueba me parece suficiente, pero deberian venir de una capa de infraestructura que conecte con la base de datos.
Agregue persistencia de datos, en localStorage, no se pedia, pero lo crei necesario.
Sobre las vistas, creo que se deberia organizar haciendo mas componentes reutilizables, como botones y/o chips. Asi como organizar las carpetas de otra manera, por ejemplo dentro de ui.

En resumen, lo deje funcional, con un enfoque que permite mejoras y escalabilidad. Pero no quiero demorarme mas, asi lo pueden ver ustedes. Quedo a la espera de cualquier duda, sugerencia y/o charla. 

Gracias por la oportunidad. Me gusto el desafio.
