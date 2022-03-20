import React from "react";
import sanitize from "sanitize-html";

export default ({ html = "" }) => {
  const sanitized = sanitize(html);
  return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
