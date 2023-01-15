import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchEmailsByPage } from "../services/email";
import { RootState, useAppDispatch } from "../redux/store";

export function useGetEmailsByPage(page: number) {
  const dispatch = useAppDispatch();
  const email = useSelector((state: RootState) => state.email);

  useEffect(() => {
    if (email.total === 0) {
      dispatch(fetchEmailsByPage({ page }));
    }
  }, []);

  const isLoading = email.loading;
  const isError = email.error;
  const data = {
    list: email.list,
    total: email.total,
  };

  return { data, isLoading, isError };
}
