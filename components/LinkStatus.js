import React, { useEffect, useState } from "react";

const LinkStatus = ({ link }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + link , {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + "ptr_1ue3/4uiFfTwiM+f1Rg2Cwz829PFiFllKFsLRj02/Is=",
    },
  })
      .then(response => {
        if (response.ok) {
          setStatus("Online");
        } else {
          setStatus("Offline");
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(() => {
        setStatus("Offline");
      });
  }, [link]);

  return (
    <>
      <a href={link}>{link}</a>
      <span>: {status}</span>
    </>
  );
};

export default LinkStatus;
