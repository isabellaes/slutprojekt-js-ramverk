import { addReview } from "@/app/lib/features/books/bookSlice";
import { AppDispatch } from "@/app/lib/features/store";
import { Review } from "@/app/lib/utils/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./form.scss";
import CancelIcon from "@mui/icons-material/Cancel";

type FormPropsType = {
  id: string;
  handleClose: () => void;
};

const Form = ({ id, handleClose }: FormPropsType) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  function handleOnSubmit() {
    if (review && rating) {
      const newReview: Review = { key: id, rating: rating, text: review };
      dispatch(addReview(newReview));
    }
  }

  return (
    <div className="review-form">
      <div className="cancel">
        <CancelIcon onClick={handleClose} />
      </div>

      <h2>Add review</h2>
      <p>{id}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <label htmlFor="review">Comment</label>
        <textarea
          name="review"
          id="review"
          onChange={(e) => setReview(e.currentTarget.value)}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          name="rating"
          id="rating"
          onChange={(e) => setRating(e.currentTarget.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
