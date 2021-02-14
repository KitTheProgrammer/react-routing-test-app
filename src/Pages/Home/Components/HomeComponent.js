import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeComponent() {
  return (
    <div>
      This is Home!<br/>
      <Link to={'/page1'}>Page1</Link><br/>
      <Link to={'/page2'}>Page2</Link><br/>
      <Link to={'/mainform'}>mainform</Link>
    </div>
  );
}
