import { HomeContent } from "./Home.styled";
import { Typography } from "@mui/material";

export default function HomePage() {
  return (
    <HomeContent>
      <Typography component="h1" variant="h4">
        Welcome to Online PhoneBook. Please, sign up or log in to see your
        contacts.
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </Typography>
    </HomeContent>
  );
}
