import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// styles
import "./EmailList.css";

// types
import type { RootState } from "../../redux/store";

// hooks
import { useAppDispatch } from "../../redux/store";

// services
import { fetchEmailsByPage } from "../../services/email";

// components
import EmailCard from "../EmailCard/EmailCard";
import EmailCardSkelton from "../EmailCard/EmailCardSkelton";
import NoEmailFound from "../NoEmailFound/NoEmailFound";

function EmailList() {
  const dispatch = useAppDispatch();

  // local states
  const [page, setPage] = useState(1);

  // redux states
  const { loading, emails, total, filteredEmails, openedEmail } = useSelector(
    (state: RootState) => state.email
  );

  // life cycle methods
  useEffect(() => {
    dispatch(fetchEmailsByPage({ page }));
  }, [page]);

  if (!loading && Object.keys(filteredEmails).length === 0) {
    return <NoEmailFound />;
  }

  /* Show Load Button
    1. fetching emails apis not in loading state
    2. current email list is less than total emails
    3. When no filter is active
  */
  const showLoadMoreButton =
    !loading &&
    Object.keys(emails).length < total &&
    Object.keys(emails).length === Object.keys(filteredEmails).length;

  return (
    <section className="email-list-container">
      {loading
        ? showEmailCardSkelton()
        : Object.values(filteredEmails).map((email) => (
            <EmailCard
              key={email.id}
              {...email}
              openedEmailId={openedEmail?.id ?? ""}
            />
          ))}
      {showLoadMoreButton && (
        <button
          className="more-email-btn"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load More
        </button>
      )}
    </section>
  );
}

function showEmailCardSkelton() {
  return Array(5)
    .fill("")
    .map((el, idx) => <EmailCardSkelton key={idx} />);
}

export default EmailList;
