import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post'

function App() {

  const [postData, updatePostData] = React.useState([]);

  React.useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key='+ process.env.REACT_APP_API_URI + '&count=10')
    .then((res) => {
      const resData = res.data;
      updatePostData(resData);
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {postData.map((post)=>{
        const {title, explanation, date, hdurl} = post;
        const formattedDate = date.substring(5,7) + '/' + date.substring(8,10) + '/' + date.substring(0,4);
        return(
          <Post title={title} image={hdurl} date={formattedDate} description={explanation}></Post>
        )
      })}
    </div>
  );
}

export default App;
