import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
function DetailedNote() {
  const [note, setNote] = useState();
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  useEffect(() => {
    async function getFunctionDetails() {
      await axios
        .get(`/notes/${id}`)
        .then((res) => {
          console.log(res.data);
          setNote(res.data[0]);
        })
        .catch((err) => console.log("The error: " + err.message));
    }
    getFunctionDetails();
  }, [id]);

  console.log(note);

  return <Layout></Layout>;
}

export default DetailedNote;
