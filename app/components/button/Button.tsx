"use Client";

import { Root } from "@/app/lib/types";
import { addBook } from "@/app/lib/features/books/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/lib/store";

type ButtonProps = {
  work: Root;
};

const Button = ({ work }: ButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button onClick={() => dispatch(addBook(work))}>Add to Fav-list</button>
  );
};

export default Button;
