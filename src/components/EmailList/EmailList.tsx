import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// types
import type { RootState } from "../../redux/store";

// hooks
import { useAppDispatch } from "../../redux/store";

// services
import { fetchEmailsByPage } from "../../services/email";

// components
import EmailCard from "../EmailCard/EmailCard";
import EmailCardSkelton from "../EmailCard/EmailCardSkelton";

function EmailList() {
  const dispatch = useAppDispatch();

  // local states
  const [page, setPage] = useState(1);

  // redux states
  const { loading, list, selectedEmail } = useSelector(
    (state: RootState) => state.email
  );

  // life cycle methods
  useEffect(() => {
    dispatch(fetchEmailsByPage({ page }));
  }, [page]);

  return (
    <section style={{ paddingTop: "1rem" }}>
      {loading
        ? showEmailCardSkelton()
        : list?.map((email) => (
            <EmailCard
              key={email.id}
              {...email}
              selectedEmailId={selectedEmail?.id ?? ""}
            />
          ))}
    </section>
  );
}

function showEmailCardSkelton() {
  return Array(5)
    .fill("")
    .map((el, idx) => <EmailCardSkelton key={idx} />);
}

export default EmailList;
