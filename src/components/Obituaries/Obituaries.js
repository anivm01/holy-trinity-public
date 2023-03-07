import React from 'react'
import Obituary from '../Obituary/Obituary';
import "./Obituaries.scss"

function Obituaries({data}) {
    if(!data) {
        return <p>Loading...</p>
      }
    return (
      <section className="events">
        {data.map((single, index) => {
          return (
            <Obituary
              key={index}
              name={single.name}
            />
          );
        })}
      </section>
    );
}

export default Obituaries