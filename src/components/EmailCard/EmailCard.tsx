import React from "react";
import Moment from "react-moment";

// styles
import "./EmailCard.css";

// types
import type { Email } from "../../models/email";

// hooks
import { useAppDispatch } from "../../redux/store";

// services
import { fetchEmailBodyById } from "../../services/email";

// actions
import { openEmailFromList } from "../../redux/slices/emailSlice";

// components
import Avatar from "../Avatar/Avatar";

export type EmailCardProps = Email & { openedEmailId: string };

const EmailCard = ({
  id,
  from: { name, email },
  subject,
  short_description,
  body,
  date,
  hasRead,
  isFavorite,
  openedEmailId,
}: EmailCardProps) => {
  const dispatch = useAppDispatch();

  const handleEmailCardClick = () => {
    if (body.length === 0) {
      dispatch(fetchEmailBodyById({ id }));
    } else {
      dispatch(openEmailFromList(id));
    }
  };

  return (
    <section
      className={`email-card ${hasRead ? "read" : ""} ${
        openedEmailId === id ? "open" : ""
      }`}
      onClick={handleEmailCardClick}
    >
      <div className="icon">
        <Avatar name={name} />
      </div>
      <div className="info">
        <p>
          From: <span className="bold">{`${name} <${email}>`}</span>
        </p>
        <p>
          Subject: <span className="bold">{subject}</span>
        </p>
        <p className="description">{short_description}</p>
        <div className="metadata">
          <Moment format="DD/MM/YYYY h:mma">{date}</Moment>
          {isFavorite && <p className="favorite bold">Favorite</p>}
        </div>
      </div>
    </section>
  );
};

export default EmailCard;
