import React from 'react';

const RepoListEntry = (props) => {
  return(
    <li>
      {/* <span>{props.repo.repoName}</span> */}
      <span>{props.repo.owner}</span>
      {/* <span>{props.repo.url}</span> */}
      <span>{props.repo.size}</span>
    </li>
  )
}

export default RepoListEntry;