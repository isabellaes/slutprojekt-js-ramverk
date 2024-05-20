import { addReview } from "@/app/lib/features/books/bookSlice";
import { AppDispatch } from "@/app/lib/features/store";
import { Review } from "@/app/lib/utils/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./form.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import Rating from "@mui/material/Rating";

type FormPropsType = {
  id: string;
  handleClose: () => void;
};

const Form = ({ id, handleClose }: FormPropsType) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number | null>(0);

  const dispatch = useDispatch<AppDispatch>();

  function handleOnSubmit() {
    if (review && rating) {
      const newReview: Review = { key: id, rating: rating, text: review };
      dispatch(addReview(newReview));
    }
    handleClose();
  }

  return (
    <div className={styles.form}>
      <div className={styles.cancel}>
        <CancelIcon onClick={handleClose} />
      </div>

      <h2>Add review</h2>

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

        <Rating value={rating} onChange={(e, value) => setRating(value)} />

        <input className={styles.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
