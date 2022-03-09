import React from 'react';

const Cardscategory = () => {
  return(
    <div className="main_category">
        <h3 className="local_head">Categories</h3>
      <div className="inner_category">

          <div className="cate_one cates">
              <div className="cate_text_one">
                  <h5>GAMING</h5>
                  <h2>RTX 3000 SERIES</h2>
                  <p>GAMING LAPTOPS</p>
              </div>
              <div className="cate_image_one">
                  <img src="https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="image"  className='cates_image1 local_img '/>
              </div>
          </div>

          
          <div className="cate_two cates">
              
              <div className="cate_text_two">
              <h5>APPLE</h5>
                  <h3>APPLE MACBOOKS</h3>
                  <p>WITH M1 CHIP</p>
              </div>
              <div className="cate_image_two">
                  <img src="https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="image" className='cates_image2 local_img'/>
              </div>
          </div>

          
      </div>
    </div>
  )
};

export default Cardscategory;
