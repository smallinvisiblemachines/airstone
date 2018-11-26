import HeadConfig from '../configureHead.js';

export default function renderHead( html, preloadedState ) {
  return `
    <!doctype ${ HeadConfig.lang ? 'lang="' + HeadConfig.lang + '"' : ''}>
    <html>
      <head>
        <title>universalBust</title>
        ${ HeadConfig.charset ? '<meta charset="' + HeadConfig.charset + '">' : ''}
        ${ HeadConfig.description ? '<meta name="description" content="' + HeadConfig.description + '">' : ''}
        ${ HeadConfig.keywords ? '<meta name="keywords" content="' + HeadConfig.keywords + '">' : ''}
        ${ HeadConfig.viewport ? '<meta name="viewport" content="' + HeadConfig.viewport + '">' : ''}
        ${ HeadConfig.extStylesheets ? '<link rel="stylesheet" type="text/css" href="/' + HeadConfig.extStylesheets + '">' : ''}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}