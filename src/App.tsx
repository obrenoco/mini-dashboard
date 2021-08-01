import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const today = `${dayNames[date.getDay()]}, ${date.getDate()} ${
  monthNames[date.getMonth()]
} ${date.getFullYear()}`;

function App() {
  return (
    <div className="App h-screen">
      <Header>
        <Title>Daily Stats</Title>
      </Header>
      <Container>
        <Title>{`${today}`}</Title>
      </Container>
    </div>
  );
}

export default App;
