import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

type FavouriteButtonProps = {
  checkIfFavourite: () => boolean;
  handleAddToFavourite: () => void;
  handleRemoveFavourite: () => void;
};
const FavouriteButton = ({
  checkIfFavourite,
  handleAddToFavourite,
  handleRemoveFavourite,
}: FavouriteButtonProps) => {
  return (
    <>
      {checkIfFavourite() ? (
        <FavoriteIcon
          sx={{ color: "#D90368" }}
          onClick={() => handleRemoveFavourite()}
        />
      ) : (
        <FavoriteBorderOutlinedIcon onClick={() => handleAddToFavourite()} />
      )}
    </>
  );
};

export default FavouriteButton;
