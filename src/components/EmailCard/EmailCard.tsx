import React from "react";
import Moment from "react-moment";

// styles
import "./EmailCard.css";

// types
import { Email } from "../../models/email";

// components
import Avatar from "../Avatar/Avatar";

export type EmailCardProps = Email;

function EmailCard(props: EmailCardProps) {
  const {
    from: { name, email },
    subject,
    short_description,
    date,
    hasRead,
    isFavorite,
  } = props;

  return (
    <section className={`email-card ${hasRead ? "read" : ""}`}>
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
}

export default EmailCard;
