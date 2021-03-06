import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
    {props.topRepos.map((repo, i) => {
      return <RepoListEntry key={i} repo={repo} />
    })}
    </ul>
  </div>
)

export default RepoList;