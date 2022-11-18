import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';

function App() {

  const handleCallbackResponse = (response) => {
    console.log(response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
   /*global google*/
   google.accounts.id.initialize({
    client_id: "904876233480-179bf3pf9hflg4v59pl0plu782rkcngd.apps.googleusercontent.com",
    callback: handleCallbackResponse
   });

   google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }
   );
   google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div id="buttonDiv"></div>
    </div>
  );
}

export default App;
