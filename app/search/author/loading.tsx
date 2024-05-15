import Container from "@/app/components/container/Container";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Container>
      <h1>Search Page</h1>
      <CircularProgress />
    </Container>
  );
};

export default Loading;
