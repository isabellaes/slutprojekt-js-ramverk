import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={200} height={300} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

export default CardSkeleton;
