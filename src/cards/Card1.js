import React from "react";


const Card1 = () => {
  return (
    <div class="col-lg-4  col-md-6">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            Free
          </h5>
          <h6 class="card-price text-center">
            $0<span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li class="d-flex align-items-center gap-2">
            
              Single User
            </li>
            <li class="d-flex align-items-center gap-2">
             
              5GB Storage
            </li>
            <li class="d-flex align-items-center gap-2">
           
              Unlimited Public Projects
            </li>
            <li class="d-flex align-items-center gap-2">
           
              Community Access
            </li>
            <li class="d-flex align-items-center gap-2 text-muted">
           
              Unlimited Private Projects
            </li>
            <li class="d-flex align-items-center gap-2 text-muted">
           
              Dedicated Phone Support
            </li>
            <li class="d-flex align-items-center gap-2 text-muted">
            
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



export default Card1;