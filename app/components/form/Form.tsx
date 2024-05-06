import { useState } from "react";

type FormPropsType = {
  key: string;
  numberOfPages: number;
};

const Form = ({ key, numberOfPages }: FormPropsType) => {
  const [review, setReview] = useState<string>();
  const [rating, setRating] = useState<string>();

  function handleOnSubmit() {
    //dispatch form
  }

  return (
    <form action="">
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
      <button onClick={() => handleOnSubmit()}>Submit</button>
    </form>
  );
};

export default Form;
