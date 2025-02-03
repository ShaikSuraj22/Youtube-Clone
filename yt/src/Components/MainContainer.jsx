import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = ({ searchQuery }) => {
  return (
    <div className='col-span-11 h-[700px]'>
      <ButtonList />
      <VideoContainer searchQuery={searchQuery} />
    </div>
  );
};

export default MainContainer;
