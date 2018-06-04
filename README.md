                                          <CIPHER CH@T>
                                          Version <1.0>
                                          <04/06/2018>
                            PROJECT MANAGER: <Sadi Medina Chavez>

1	JUSTIFICACION DEL PROYECTO
  1.1	NECESIDADES DEL PROYECTO
      La idea de crear esta aplicación web (Cipher Ch@t) surge del siguiente caso planteado:

      Está próxima la fecha del cumpleaños de tu novio(a) y estás organizando una fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto con amigos y familiares. Un gran problema es que pones tu alarma para levantarte temprano, sin embargo (como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides crear una aplicación que te permita enviar mensajes cifrados y que las demás personas (partícipes de la fiesta) puedan tener una interfaz para descifrarlo.

      Cabe mencionar que para la elaboracion de este proyecto, se empleo un tipo de cifrado por sustitución en el que una letra, en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

      Por ejemplo si usáramos un desplazamiento de 3:

        Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

2	ALCANCE
  “Cipher Ch@t” es una aplicación que funciona en un entorno web y que permite a sus usarios a codificar y    decodificar un texto.
  2.1	OBJETIVOS DEL PROYECTO
      Los objetivos de <Cipher Ch@t> son los siguientes:
      •	Crear una Aplicación Web que permita Cifrar y Descifrar mensajes.
      •	La aplicacion Web debe permitir compartir los mensajes por las Redes Soliales.
3 DESCRIPCIÓN GENERAL
  “Cipher Ch@t” esta diseñado para trabajar en un entorno web, y tiene la capacidad de trabajar con distintos motores de búsqueda.
  3.1 Funciones del Sistema
      La aplicación tiene funciones de Codificar, Decodificar, Borrar y una Opción de compartir el
      Mensaje codificado por las principales redes sociales como Facebook, WathsApp y Mesenger.
  3.2 Características de usuario 
      Es deseable que los usuarios del sistema tengan conocimientos básicos en computación, y estén 
      familiarizados con interfaces web.
  3.3 Supuestos y dependencias 
      Se asume que los usuarios tienen instalados la ultima version de navegadores (Google, Internet Explorer, Safari, etc.)

4 REQUISITOS ESPECÍFICOS
  4.1 FUNCIONALES
      RF01: La app permite codificar un texto.
      RF02: La app permite decodificar un texto.
      RF03: La app permite compartir un texto.
  4.2 Usabilidad
      RFN01: El app permite facilidad de interacción con el  usuario.
      RFN02: El app tiene la capacidad de cifrar y descifrar los siguientes caractares de texto:
             letras mayusculas, minusculas, numeros, simbolos y espacio.
  4.3 Confiabilidad
      RFN04: La app esta disponible 24 x 7 x 365 días del año.     
  4.4 Rendimiento
      RFN05: El tiempo de respuesta promedio de la app es de 5 segundos. 
  4.5 Soporte
      RFN06: El app funciona con lenguaje de programación JavaScript.
5 INTERFAZ
  5.1 Interfaces de Usuario
      • N° de Desplazamiento: Permite al usuario ingresar un `offset` indicando cuántas 
        posiciones quiere que el cifrado desplace cada caracter.
      • Escriba un Texto: Es el espacio donde el usuario insertara un mensaje (texto), el cual quiere
        cifrar o descifrar.
      • Resultado: Es el espacio donde se visualiza el resultado del mensaje cifrado o descifrado.
      • Codificar, Decodificar y Borrar: Son botones que realizan acciones tal como menciona su nombre.
      
6 GLOSARIO
  RF:  Requerimientos Funcionales.
  RNF: Requerimientos no Funcionales
  PROTOTIPO: Es un ejemplar que se fabrica de una figura, un invento u otra cosa, 
             y que sirve de modelo.
  COPYRIGHT: Derecho de Autor
  SOTFWARE: equipamiento lógico o soporte lógico de un sistema.
