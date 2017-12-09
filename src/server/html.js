export default function html(options) {
  const {
    app = 'main',
    title = 'example',
    markup,
    initialState,
    serialize
  } = options;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet"
           href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.initialState = ${serialize(initialState)};
        </script>
        <script src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `;
}
