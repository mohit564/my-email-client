import Moment from "react-moment";

import "./EmailCard.css";

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
    <section className="email-card">
      <div className="avatar">
        <p>{email.from.name.charAt(0).toUpperCase()}</p>
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
          <p className="favorite">Favorite</p>
        </div>
      </div>
    </section>
  );
}

export default EmailCard;
