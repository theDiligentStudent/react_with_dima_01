import React from 'react';
import { useParams } from 'react-router-dom';



const DialogueDetail = () => {
  const { id } = useParams(); // Extract the dynamic part of the URL
  // Get the dialogue ID from the URL parameters

  return (
    <div>
      <h1>Dialogue {id}</h1>
      {/* Render specific dialogue details here */}
    </div>
  );
};

export default DialogueDetail;