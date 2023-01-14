import React from "react";
import Moment from "react-moment";
import parse from "html-react-parser";

// styles
import "./EmailBody.css";
import "../Avatar/Avatar.css";

// components
import Avatar from "../Avatar/Avatar";

const email = {
  id: "1",
  subject: "Lorem Ipsum",
  name: "bounced",
  date: 1582729505000,
  body: "<div><p>Nulla at euismod erat. Donec fermentum dui ut scelerisque rhoncus. Aliquam erat volutpat. Nunc ut tortor sit amet lectus gravida dictum. Morbi eget ultricies eros, nec mollis arcu. Quisque nunc massa, gravida quis sem et, dignissim ultrices nulla. Quisque non venenatis dui, nec volutpat magna. Vivamus porttitor, arcu sed euismod faucibus, mauris lacus interdum orci, et ultrices augue leo id lorem. Ut lectus leo, finibus quis urna vitae, auctor mollis nulla. Aliquam auctor nulla tristique lectus placerat, ac commodo ex egestas. Ut venenatis, eros eu tristique maximus, libero nisi fermentum mi, at sollicitudin quam lorem in felis.</p><p>Integer lacinia, ante ut mattis tincidunt, quam augue laoreet elit, vitae consequat arcu lacus ac magna. Nunc euismod in magna eget molestie. Phasellus lacinia in sapien id ultricies. Nulla ac rhoncus nulla. Donec pellentesque tortor iaculis dolor mollis laoreet. Nunc magna orci, suscipit ut nunc fringilla, imperdiet tempus libero. Mauris sed nunc mattis urna tempor tempor vitae eget lorem. Sed pellentesque, tellus vel sagittis dignissim, ipsum erat tempor turpis, id tristique augue mi tincidunt nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum quis nibh scelerisque pretium vitae ac turpis. Cras porta vestibulum lorem sit amet lacinia. Phasellus accumsan est sagittis, scelerisque ligula at, porta arcu. Vestibulum metus justo, tempus eget feugiat id, iaculis tincidunt elit.</p><p>Aliquam diam mauris, porttitor non commodo at, viverra id dui. Proin finibus a nulla id posuere. Donec ultricies cursus metus, at egestas tortor dignissim eu. Aliquam a massa eu erat gravida ultrices. Vivamus venenatis imperdiet purus, at egestas enim elementum quis. Nunc ultricies sapien sapien, gravida porttitor diam porta non. Fusce pretium sodales erat. Donec interdum ipsum odio, sit amet luctus est pharetra non. Mauris euismod neque eu malesuada scelerisque. In ultricies lectus eu libero accumsan, ultricies commodo nibh consequat. Pellentesque condimentum, neque id sollicitudin egestas, risus est lobortis diam, in faucibus sapien tortor eu felis. Cras a turpis aliquam, tristique eros at, ullamcorper tellus. Maecenas at tortor magna.</p></div>",
};

function EmailBody() {
  return (
    <article className="email">
      <div className="icon">
        <Avatar name={email.name} />
      </div>
      <section className="info">
        <button className="favorite-btn">Mark as Favorite</button>
        <h1 className="subject bold">{email.subject}</h1>
        <Moment format="DD/MM/YYYY h:mma">{email.date}</Moment>
        <p className="message">{parse(email.body)}</p>
      </section>
    </article>
  );
}

export default EmailBody;
