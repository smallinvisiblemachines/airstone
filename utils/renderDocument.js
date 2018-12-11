export default function renderDocument( head, chain, state ) {
  /*
    return an html document as a string based on some <head> configuration,
    a component chain (ReactJs, etc.), and an app state that can be used
    by a client-side bundle that can invoke a seamless single-page-app
    when the document is ready.
  */
  
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