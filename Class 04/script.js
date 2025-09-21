const BigContainer = (
  <div id="main-container" style={{ textAlign: "center" }}>
    <h3 id="heading-3" style={{ fontSize: "40px" }}>
      Form
    </h3>
    <img
      src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F18h8oyjknd6q0tmkz383.png"
      style={{
        width: "100%",
        maxWidth: "300px",
        backgroundColor: "blue",
        padding: "10px",
        borderRadius: "20px",
      }}
    />
    <div id="input-container">
      <label htmlFor="username">Username : </label>
      <input id="username" type="password" style={{ margin: "10px" }} />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(BigContainer);