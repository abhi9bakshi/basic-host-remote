import React from "react";

const RemoteButton = React.lazy(() => import("app2/Button"));

const divStyle = {
  'width': '100vw',
  'max-width': '1280px',
  'margin': '0 auto',
  'padding': '20px',
  'box-sizing': 'border-box',
  'border': '1px solid red'
}

const App = () => (
  <div style={divStyle}>
    <h1>Container</h1>
    <React.Suspense fallback="Loading Button">
      <RemoteButton params={[1,2,3,4,5,6]} />

      <hr />

      <RemoteButton params={[1,2,3]} />
    </React.Suspense>
  </div>
);

export default App;
