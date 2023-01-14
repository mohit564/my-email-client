import Moment from "react-moment";

// styles
import "./EmailCard.css";

// components
import Avatar from "../Avatar/Avatar";

const email = {
  id: "1",
  from: {
    email: "bounced@flipkart.com",
    name: "bounced",
  },
  date: 1582729505000,
  subject: "Lorem Ipsum",
  short_description:
    "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
};

function EmailCard() {
  return (
    <section className="email-card read open">
      <div className="icon">
        <Avatar name={email.from.name} />
      </div>
      <div className="info">
        <p>
          From:{" "}
          <span className="bold">
            {`${email.from.name} <${email.from.email}>`}
          </span>
        </p>
        <p>
          Subject: <span className="bold">{email.subject}</span>
        </p>
        <p className="description">{email.short_description}</p>
        <div className="metadata">
          <Moment format="DD/MM/YYYY h:mma">{email.date}</Moment>
          <p className="favorite bold">Favorite</p>
        </div>
      </div>
    </section>
  );
}

export default EmailCard;
