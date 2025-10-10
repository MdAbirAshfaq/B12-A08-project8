import React from 'react';
import { Link } from 'react-router';

const App = ({ appData }) => {
    console.log("App Data:", appData); 

    const {image, title, companyName, description, id ,downloads, ratingAvg} = appData
    return (
        <div>
          <Link to={`/AppDetails/${id}`} >
              <div className='bg-[#F5F5F5]  hover:scale-105' >
            <div className="card bg-base-100 mb-[20px] w-[320px] h-[390px] shadow-sm">
  <figure>
    <img
      className='w-[250px] h-[250px] pt-[20px] '
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title} : {companyName}
    </h2>
    <p> {description} </p>
    <div className="card-actions justify-between">
      <div className=" bg-[#F1F5E8] rounded-[4px] text-[#00D390] py-[3px] px-[5px]"><i class="fa-solid fa-download"></i>{downloads}M</div>
      <div className="bg-[#FFF0E1] rounded-[4px] text-[#FF8811] py-[3px] px-[6px]"><i class="fa-solid fa-star"></i>{ratingAvg}</div>
    </div>
  </div>
</div>
        </div>
        </Link>
        </div>
    );
};

export default App;
