import React from "react";
import Moment from "react-moment";

// styles
import "./EmailCard.css";

// types
import { Email } from "../../models/email";

// components
import Avatar from "../Avatar/Avatar";

function EmailCard(props: Email) {
  return (
    <section className={`email-card ${props.hasRead ? "read" : ""}`}>
      <div className="icon">
        <Avatar name={props.from.name} />
      </div>
      <div className="info">
        <p>
          From:{" "}
          <span className="bold">
            {`${props.from.name} <${props.from.email}>`}
          </span>
        </p>
        <p>
          Subject: <span className="bold">{props.subject}</span>
        </p>
        <p className="description">{props.short_description}</p>
        <div className="metadata">
          <Moment format="DD/MM/YYYY h:mma">{props.date}</Moment>
          {props.isFavorite && <p className="favorite bold">Favorite</p>}
        </div>
      </div>
    </section>
  );
}

export default EmailCard;
