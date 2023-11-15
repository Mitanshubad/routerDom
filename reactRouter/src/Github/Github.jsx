import React, { useState, useEffect } from 'react';

function Github() {
  const [username, setUsername] = useState('github');
  const [data, setData] = useState({});

  const fetchData = () => {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual personal access token
    const accessToken ="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";

    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData);
        setData(userData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-gray-900 text-white height =100vh width 100 vw'>
     <div    style={{ maxWidth: '800px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <div>
        <label htmlFor='usernameInput'>Enter GitHub Username:</label>
        <input
        className='m-0 p-8 bg-gray-100 border border-gray-300 text-black'
          placeholder='Search here'
          type='text'
          id='usernameInput'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: '0 10px', padding: '5px' }}
        />
        <button     className='p-8 pr-15 cursor-pointer bg-green-500 text-white border-none rounded-md'  onClick={fetchData} style={{ padding: '5px 10px', cursor: 'pointer' }}>
          Search
        </button>
      </div>
      {data.login && (
        <div style={{ marginTop: '20px' }}>
          <img src={data.avatar_url} alt='Avatar' width={300} style={{ borderRadius: '50%' }} />
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
              Username: {data.login}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold',color: 'white' }}>
              GitHub followers: {data.followers}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Github;
