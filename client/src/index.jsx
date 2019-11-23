import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      topRepos: [],
    }
  }

  componentDidMount() {
    ajax({
      url: '/all',
      type: 'GET',
      success: (repos) => {
        repos.sort((a, b) => (b.size > a.size) ? 1 : -1)
        let topRepos = repos.slice(0, 25)
        return this.setState({ repos: repos, topRepos: topRepos })
      }
    })
  }
  search(term) {
    console.log(`${term} was searched`);
    // TODO
    axios.post('/repos', { term: term })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // topRepos() {
  //   const topRepos = this.state.repos.slice();
  //   topRepos.sort(function compare(a, b) {
  //     return b.size - a.size;
  //   })
  //   this.setState({topRepos: topRepos})
  //   return topRepos;
  // }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} topRepos={this.state.topRepos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));