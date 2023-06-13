import React from "react";


const Card2 = () => {
  return (
    <div class="col-lg-4 col-md-3">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            Plus
          </h5>
          <h6 class="card-price text-center">
            $9<span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li class="d-flex align-items-center gap-2">
       
              <strong>5 Users</strong>
            </li>
            <li class="d-flex align-items-center gap-2">
            
              50GB Storage
            </li>
            <li class="d-flex align-items-center gap-2">
            
              Unlimited Public Projects
            </li>
            <li class="d-flex align-items-center gap-2">
           
              Community Access
            </li>
            <li class="d-flex align-items-center gap-2">
           
              Unlimited Private Projects
            </li>
            <li class="d-flex align-items-center gap-2">
            
              Dedicated Phone Support
            </li>
            <li class="d-flex align-items-center gap-2">
           
              Free Subdomain
            </li>
            <li class="d-flex align-items-center gap-2 text-muted">
             
              Monthly Status Reports
            </li>
          </ul>
          <div class="d-grid">
            <button class="btn d-block btn-primary text-uppercase">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;