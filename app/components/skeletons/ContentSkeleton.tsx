import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ContentSkeleton = () => {
  return (
    <Stack spacing={3}>
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rectangular" width={900} height={300} />
    </Stack>
  );
};

export default ContentSkeleton;
