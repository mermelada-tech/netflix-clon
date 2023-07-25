# Netflix Clone

Este proyecto es un clon de la página de inicio de Netflix, realizado siguiendo
el tutorial de [Code With Antonio](https://www.youtube.com/watch?v=mqUN4N2q4qY).
Está construido con [Tailwind CSS](https://tailwindcss.com/),
[Next.js](https://nextjs.org/) y [TypeScript](https://www.typescriptlang.org/).

## Capturas de pantalla

[Coloca aquí algunas capturas de pantalla del proyecto para que los usuarios
puedan ver cómo se ve.]

## Características

- Clon de la página de inicio de Netflix
- Construido con Tailwind CSS, Next.js y TypeScript
- Completamente responsivo

## Cómo utilizar

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta el servidor de desarrollo con `npm run dev`

## Conexión a la base de datos y autenticación

El proyecto contiene en la raíz un ejemplo de fichero llamado .env.example que
se tiene que renombrar a .env y reemplazar las variables de entorno:

1. DATABASE_URL: la url de conexión a la base de datos. Para ello se debe
   generar un cluster y una base de datos desde
   [Mongo DB Atlas](https://www.mongodb.com/atlas/database). El formato de la
   url debería ser algo parecido a lo siguiente:
   `mongodb+srv://<username>:<password>@<cluster-url>/<database>`, donde
   `<username>` es el nombre de usuario, `<password>` a contraseña,
   `<cluster-url>` la url de nuestro cluster y `<database>` el nombre de nuestra
   base de datos. El fichero schema.prisma contiene el modelo de datos. Para
   prever las colecciones dentro de la base de datos generada en Mongo DB Atlas
   debemos abrir una terminal y escribir el comando `npx prisma db push`. Esto
   generará las colecciones dentro de nuestra base de datos.
2. GITHUB_ID y GITHUB_SECRET: el id de nuestra aplicación de GitHub. Para ello
   debemos crear una aplicación en
   [GitHub Developer Settings](https://github.com/settings/developers)
3. GOOGLE_ID y GOOGLE_SECRET: el id de nuestra aplicación de Google. Para ello
   debemos crear una aplicación en
   [Google Cloud Platform](https://console.cloud.google.com/apis/credentials) y
   en APIs y Servicios > Pantalla de consentimiento OAuth debemos completar los
   campos de la pantalla de consentimiento. Luego, en Credenciales, agregar
   nuestro email de contacto y nuestro id y secret de la aplicación serán
   creados

## Contribuidores

Agradecemos a los siguientes contribuidores por su ayuda en el desarrollo de
este proyecto:

- [Alfonsina Lizardo](https://github.com/Alais29)
- [Nadia Ujovich](https://github.com/nujovich)
- [Florencia Luz Duarte](https://github.com/florluzduarte)
- [Ares Miro](https://github.com/aresmiiro)
- [Carol Pirela](https://github.com/caropi30)

Si quieres contribuir a este proyecto, por favor, lee nuestras pautas de
contribución [aquí](CONTRIBUTING.md) y envía un Pull Request con tus cambios.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
