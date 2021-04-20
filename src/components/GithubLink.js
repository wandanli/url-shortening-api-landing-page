import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubLink = () => {
  return (
    <div className="github-link">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/wandanli/url-shortening-api-landing-page"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default GithubLink;
