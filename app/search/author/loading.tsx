import Container from "@/app/components/container/Container";
import CircularProgress from "@mui/material/CircularProgress";
import style from "../searchResult.module.scss";

const Loading = () => {
  return (
    <Container>
      <h1 className={style.title}>Searching...</h1>
      <div className={style.loading}>
        <CircularProgress />
      </div>
    </Container>
  );
};

export default Loading;
