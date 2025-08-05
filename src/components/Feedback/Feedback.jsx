import { useState } from "react";
import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const onDislike = () => {
    setDislikes((prevValue) => prevValue + 1);
  };

  const onReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback_wrapper">
      <div className="feedback_section">
        <Button buttonName="Like" onClick={onLike} color="#2ecc71" />
        <p className="count">{likes}</p>
      </div>
      <div className="feedback_section">
        <Button buttonName="Dislike" onClick={onDislike} color="#e74c3c" />
        <p className="count">{dislikes}</p>
      </div>
      <div className="reset_section">
        <Button buttonName="Reset Results" onClick={onReset} color="#f39c12" />
      </div>
    </div>
  );
}

export default Feedback;
