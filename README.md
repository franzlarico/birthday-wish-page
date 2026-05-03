# Birthday Wish Page

Pagina web hecha con React + Vite para dedicar un feliz cumpleanos.

## Como usar

```bash
npm install
npm run dev
```

Luego abre la URL que muestra Vite.

## Donde cambiar los datos

Edita `src/data/birthdayProfile.ts`. Ahi puedes cambiar el nombre, mensajes, recuerdos, colores, fecha, musica sugerida y detalles de la persona.

## Arquitectura

- `src/domain`: tipos y contratos del saludo.
- `src/application`: caso de uso que prepara la pagina.
- `src/data`: datos editables de la persona.
- `src/presentation`: componentes, layout y estilos.
