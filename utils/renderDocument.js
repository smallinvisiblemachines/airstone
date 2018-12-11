export default function renderDocument( head, chain, state ) {
  /*
    return an html document as a string based on some <head> configuration,
    a component chain (ReactJs, etc.), and an app state that can be used
    by a client-side bundle that can invoke a seamless single-page-app
    when the document is ready.
  */
  /*return `
    <!doctype ${ head.lang ? 'lang="' + head.lang + '"' : ''}>
    <html>
      <head>
        <title>${ head.title }</title>
        ${ head.charset ? '<meta charset="' + head.charset + '">' : ''}
        ${ head.description ? '<meta name="description" content="' + head.description + '">' : ''}
        ${ head.keywords ? '<meta name="keywords" content="' + head.keywords + '">' : ''}
        ${ head.viewport ? '<meta name="viewport" content="' + head.viewport + '">' : ''}
        ${ head.extStylesheets ? '<link rel="stylesheet" type="text/css" href="/' + head.extStylesheets + '">' : ''}
      </head>
      <body>
        <div id="root">${chain}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
  */

  // ${ helmet.htmlAttributes.toString() }
  // ${ helmet.meta.toString() }
  //       ${ helmet.bodyAttributes.toString() }
  console.log(head)
  return `
    <!doctype html>
    <html>
      <head>
        <title>${ head.props.title }</title>
        ${ head.props.charset ? '<meta charset="' + head.props.charset + '">' : ''}
        ${ head.props.description ? '<meta name="description" content="' + head.props.description + '">' : ''}
        ${ head.props.keywords ? '<meta name="keywords" content="' + head.props.keywords + '">' : ''}
        ${ head.props.viewport ? '<meta name="viewport" content="' + head.props.viewport + '">' : ''}
        ${ head.props.extStylesheets ? '<link rel="stylesheet" type="text/css" href="/' + head.props.extStylesheets + '">' : ''}
      </head>
      <body>
        <div id="root">${chain}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `;

}