import React from "react";
import Moment from "react-moment";

// styles
import "./EmailCard.css";

// types
import { Email } from "../../models/email";

// hooks
import { useAppDispatch } from "../../redux/store";

// services
import { fetchEmailById } from "../../services/email";

// components
import Avatar from "../Avatar/Avatar";

export type EmailCardProps = Email & { selectedEmailId: string };

const EmailCard = ({
  id,
  from: { name, email },
  subject,
  short_description,
  date,
  hasRead,
  isFavorite,
  selectedEmailId,
}: EmailCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <section
      className={`email-card ${hasRead ? "read" : ""} ${
        selectedEmailId === id ? "open" : ""
      }`}
      onClick={() => dispatch(fetchEmailById({ id }))}
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
