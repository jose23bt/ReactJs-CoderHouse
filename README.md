Descripción del Proyecto:

Este proyecto de e-commerce ofrece una experiencia de compra conveniente y accesible para adquirir una amplia gama de productos de primera necesidad. Siguiendo la consigna del curso de React.js de Coder House, he desarrollado una aplicación que incluye los siguientes componentes esenciales:

Navbar: Navegación intuitiva que te permite explorar las diferentes secciones de LomasMarket, desde snacks y bebidas hasta productos de cuidado personal.

Catálogo: Una selección cuidadosa de comestibles y productos básicos organizados para una fácil búsqueda y selección.

Detalle de Producto: Información detallada sobre cada producto, incluyendo imágenes, descripciones y precios.

CartContext: Gestión del carrito de compras, lo que te permite agregar y eliminar productos según tus necesidades.

CartWidget: Un widget de carrito de compras que muestra de manera dinámica la cantidad de productos en tu carrito.

Además, hemos desarrollado componentes específicos requeridos por el curso, como NavBar, CartWidget, ItemListContainer, ItemList, ItemDetailContainer, ItemDetail, ItemQuantitySelector, Description, AddItemButton, Checkout.



INSTALACION:

Para poner en funcionamiento LomasMarket en tu entorno local, sigue estos pasos:

Clonar el Repositorio:

Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio desde GitHub:

bash

git clone https://github.com/jose23bt/ReactJs-CoderHouse.git

Navegar al Directorio del Proyecto:

Ingresa al directorio del proyecto clonado con el siguiente comando:

bash

cd ReactJs-CoderHouse


Instalar Dependencias:

Asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo desde Node.js.
Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm install

Iniciar la Aplicación:

Una vez que se hayan instalado las dependencias y configurado las variables de entorno (si es necesario), puedes iniciar la aplicación con el siguiente comando:

npm start

Acceder a la Aplicación:

La aplicación estará disponible en tu navegador web en la dirección http://localhost:3000. Puedes abrir tu navegador y acceder a esta URL para interactuar con LomasMarket.



Configuración de Firebase (Base de Datos):

Este proyecto utiliza Firebase como base de datos para almacenar y gestionar información importante. Para configurar Firebase en tu proyecto, sigue estos pasos:

Crear un proyecto Firebase:

Ve a Firebase Console y crea un nuevo proyecto.
Configurar Firebase en tu proyecto:

Descarga el archivo de configuración de Firebase (google-services.json para Android o GoogleService-Info.plist para iOS) desde la configuración de tu proyecto en Firebase Console.
Coloca este archivo de configuración en la carpeta correspondiente de tu proyecto.
Agregar las dependencias de Firebase:

Abre el archivo package.json de tu proyecto y asegúrate de que las dependencias de Firebase estén listadas allí. Si no lo están, agrega las siguientes dependencias en la sección dependencies:

"dependencies": {
  // Otras dependencias...
  "firebase": "^9.0.0" // Asegúrate de utilizar la última versión de Firebase.
}

Luego, ejecuta npm install nuevamente para asegurarte de que las nuevas dependencias se instalen.
Inicializar Firebase en tu aplicación:

En el código de tu aplicación, asegúrate de inicializar Firebase con el archivo de configuración que descargaste. Puedes hacerlo en el punto de inicio de tu aplicación. Aquí tienes un ejemplo en JavaScript:

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

Reglas de seguridad de Firebase:

Configura las reglas de seguridad en Firebase Console para asegurar que tu base de datos esté protegida adecuadamente. Las reglas de seguridad son esenciales para restringir el acceso no autorizado a tus datos.