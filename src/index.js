//dependencies
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//components
import App from "./pages/App";
import { EditContextProvider } from "./Context/EditContext";

//code

//authentication
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <EditContextProvider>
    <Auth0Provider
      domain={"https://adminsbsc.herokuapp.com"}
      clientId={clientId}
      redirectUri={"https://adminsbsc.herokuapp.com"}
    >
      <App />
    </Auth0Provider>
  </EditContextProvider>,
  document.getElementById("root")
);
