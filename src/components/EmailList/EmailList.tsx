import React, { useEffect } from "react";

// hooks
import { useGetEmailsByPage } from "../../hooks/email";

// components
import EmailCard from "../EmailCard/EmailCard";
import EmailCardSkelton from "../EmailCard/EmailCardSkelton";

function EmailList() {
  const { data, isLoading, isError } = useGetEmailsByPage(1);

  return (
    <section style={{ paddingTop: "1rem" }}>
      {isLoading
        ? showEmailCardSkelton()
        : data?.list?.map((email) => <EmailCard key={email.id} {...email} />)}
    </section>
  );
}

function showEmailCardSkelton() {
  return Array(5)
    .fill("")
    .map((el, idx) => <EmailCardSkelton key={idx} />);
}

export default EmailList;
