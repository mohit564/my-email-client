import React, { useEffect } from "react";

// hooks
import { useGetEmailsByPage } from "../../hooks/email";

// components
import EmailCard from "../EmailCard/EmailCard";

function EmailList() {
  const { data, isLoading, isError } = useGetEmailsByPage(1);

  return (
    <section style={{ paddingTop: "1rem" }}>
      {data.list.map((email) => (
        <EmailCard key={email.id} {...email} />
      ))}
    </section>
  );
}

export default EmailList;
