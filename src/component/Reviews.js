import Rose from './Media/Rosie.png';
import John from './Media/john.png';
import Cher from './Media/cher.png';


function Reviews(props){
    return(
    <>
        <h2 className='review-header'>What people say about us</h2>

        <div className="container">

            {/* <swiper-container className="mySwiper" init="false"> */}
            <swiper-slide>
            <div className="review-card">
                <p>
              A friend introduced me to The green lifestyle community and I've
              never looked. I bought and grew vegetables in my backyard and this
              has helped my family so much, especially with the current economic
              downturn in Nigeria.
            </p>

            <div className="card-bottom">
              <div className="card-bottom__details">
                <div className="card-bottom__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                     <path
                      d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                    />
                  </svg>
                  <img className='card-image' src={Rose} alt="girl" />
                </div>
                <div className="card-bottom__desc">
                  <h4>Rosemary I.</h4>
                  <p>Developer</p>
                </div>
              </div>
              <div class="card-bottom__rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  />
                </svg>
                <p>5.0</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="review-card">
            <p>
              A friend introduced me to The green lifestyle community and I've
              never looked. I buy and grow vegetables in my backyard and this
              has helped my family so much, especially with the current economic
              downturn in Nigeria.
            </p>

            <div className="card-bottom">
              <div className="card-bottom__details">
                <div className="card-bottom__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                    />
                  </svg>
                  <img className='card-image' src={John} alt="man" />
                </div>
                <div className="card-bottom__desc">
                  <h4>John A.</h4>
                  <p>Teacher</p>
                </div>
              </div>
              <div class="card-bottom__rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  />
                </svg>
                <p>4.9</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-card">
            <p>
              A friend introduced me to The green lifestyle community and I've
              never looked. I buy and grow vegetables in my backyard and this
              has helped my family so much, especially with the current economic
              downturn in Nigeria.
            </p>

            <div className="card-bottom">
              <div className="card-bottom__details">
                <div className="card-bottom__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                    />
                  </svg>
                  <img className='card-image' src={Cher} alt="girl" />
                </div>
                <div class="card-bottom__desc">
                  <h4>Cherish</h4>
                  <p>Developer</p>
                </div>
              </div>
              <div class="card-bottom__rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  />
                </svg>
                <p>4.8</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      {/* </swiper-container> */}
    </div>
    </>
    )
}
 export default Reviews