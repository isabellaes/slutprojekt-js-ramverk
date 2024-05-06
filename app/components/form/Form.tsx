import { addReview } from "@/app/lib/features/books/bookSlice";
import { AppDispatch } from "@/app/lib/features/store";
import { Review } from "@/app/lib/utils/types";
import { useState } from "react";
import { useDispatch } from "react-redux";

type FormPropsType = {
  key: string;
};

const Form = ({ key }: FormPropsType) => {
  const [review, setReview] = useState<string>();
  const [rating, setRating] = useState<string>();

  const dispatch = useDispatch<AppDispatch>();

  function handleOnSubmit() {
    if (review && rating) {
      const newReview: Review = { key: key, rating: rating, text: review };
      dispatch(addReview(newReview));
    }
  }

  return (
    <form>
      <label htmlFor="review">Review</label>
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
      <button
        onClick={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
