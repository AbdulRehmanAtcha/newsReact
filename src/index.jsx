import axios from 'axios';
import menu from './icons/more.png';
import searchIcon from './icons/search-interface-symbol.png';
import user from './icons/profile-user.png';
import dots from './icons/menu.png';
import loader from './icons/loader.gif';
import { useEffect } from 'react';
// import moment from 'moment';


import './App.css';
import { useState } from 'react';
import moment from 'moment/moment';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  


  useEffect(() => {

    function getTrendingNews() {

      const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: { safeSearch: 'Off', textFormat: 'Raw' },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '85KnnuP4HzmshYuCcfjg1sCMFdYkp18e8NojsnQP6hFvDHXrBr',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };

      axios.request(options)
        .then(function (response) {
          console.log(response.data);

          setData(response.data.value)

        }).catch(function (error) {
          console.error(error);
        });
    }

    getTrendingNews();

  }, [])

  const fetchNews = (event) => {    document.getElementById("bar").value = "";
    event.preventDefault()
    // const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: { q: query, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '85KnnuP4HzmshYuCcfjg1sCMFdYkp18e8NojsnQP6hFvDHXrBr',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    setIsLoading(true)
    axios
      .request(options)
      .then(function (response) {
        setIsLoading(false)

        console.log(response.data.value);
        setData(response.data.value)
      })
      .catch(function (error) {
        setIsLoading(false)

        console.error(error);
      });
  }
  return (
    <body>
      <div className="header">
        <div className="head-left">
          <img src={menu} alt="Hamburger" width="22" height="22" />
          <h2><span>A</span><span>b</span><span>d</span><span>u</span><span>l</span> News</h2>
        </div>
        <div className="head-mid">
          <form onSubmit={fetchNews}>
            <input type="text" id='bar' placeholder='Search For Topics,Locations & Sources' onChange={(e) => {
              setQuery(e.target.value)
            }} />
            {/* <input type="submit" value="CLick"/> */}
            <button type='submit'><img src={searchIcon} alt="" /></button>
          </form>
        </div>
        <div className="head-right">
          <img src={dots} alt="" height="25" width="25" />
          <img src={user} alt="" height="25" width="25" />
        </div>
      </div>
      <div className='boxes'>
        {isLoading? <img src={loader} alt='loader' width='95' height='95'/>:"" }
        {data.map(eachPost => (
          <div className="box" key={eachPost.name}>
            <div className="box-content">
              <h2><a href={eachPost?.url} target="_blank" title='Click To See Detail News' rel="noreferrer">{eachPost?.name}</a></h2>
              <p>{moment(eachPost?.datePublished).format('Do MMMM YYYY, h:mm a')
              }</p>
              <h3>{eachPost?.description}</h3>
            </div>
            <div className="box-image">
              <img src={eachPost?.image?.thumbnail?.contentUrl.replace("&pid=News", "").replace("pid=News&", "").replace("pid=News", "")
              } alt="" />
            </div>
          </div>
        ))}
      </div>
    </body>

  );
}

export default App;
