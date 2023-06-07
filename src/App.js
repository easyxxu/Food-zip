import ProfileForm from "./components/Profile/ProfileForm";
import ProfileSetting from "./pages/ProfileSetting";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
input{
  border:0;
}
button{
  border: 0;
  background-color: inherit;
  cursor: pointer;
}
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <ProfileSetting />
    </div>
  );
}
export default App;
