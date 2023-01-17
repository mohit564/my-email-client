import React from "react";
import Moment from "react-moment";
import parse from "html-react-parser";

// styles
import "./EmailBody.css";
import "../Avatar/Avatar.css";

// types
import { Email } from "../../models/email";

// actions
import { handleFavoriteButtonClick } from "../../redux/slices/emailSlice";

// hooks
import { useAppDispatch } from "../../redux/store";

// components
import EmailBodySkelton from "./EmailBodySkelton";
import Avatar from "../Avatar/Avatar";

export type EmailBodyProps = Email;

const EmailBody = ({
  id,
  from: { name },
  subject,
  date,
  isFavorite,
  body,
}: EmailBodyProps) => {
  const dispatch = useAppDispatch();

  const buttonText = isFavorite ? "Remove Favorite" : "Mark as Favorite";
  return (
    <article className="email">
      {body.length === 0 ? (
        <EmailBodySkelton />
      ) : (
        <>
          <div className="icon">
            <Avatar name={name} />
          </div>
          <section className="info">
            <button
              className={`favorite-btn ${isFavorite ? "remove" : ""}`}
              onClick={() => dispatch(handleFavoriteButtonClick(id))}
            >
              {buttonText}
            </button>
            <h1 className="subject bold">{subject}</h1>
            <Moment format="DD/MM/YYYY h:mma">{date}</Moment>
            <p className="message">{parse(body)}</p>
          </section>
        </>
      )}
    </article>
  );
};

export default EmailBody;
