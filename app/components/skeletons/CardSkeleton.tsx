import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CardSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={150} height={200} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

export default CardSkeleton;
