
import './App.css'
import { useApiContext } from './contexts/ApiContext'

function App() {
  let apiUrl = useApiContext();

  const loginRequest = async () => {
    let emailToSend = "example1@email.com";
    let passwordToSend = "SuperCoolPassword1";

    let bodyToSend = {
      email: emailToSend,
      password: passwordToSend
    }
    console.log(bodyToSend);

    let targetUrl = apiUrl + "/users/login";
    console.log(targetUrl);

    let response = await fetch(targetUrl, {
      method: "POST",
      body: JSON.stringify(bodyToSend),
      headers: {
        "Content-Type":"application/json"
      }
    });

    let data = await response.json();

    console.log(data);
  }

  return (
    <>
      <h1>{apiUrl}</h1>

      <button onClick={loginRequest} >Log in with hardcoded data</button>
    </>
  )
}

export default App
