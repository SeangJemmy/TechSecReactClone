import "../App.css";

function About() {
  return (
    <div className="m-3">
      <hr />
      <h1 className="text-center" id="AboutUs">
        About Us
      </h1>
      <hr />
      <div className="container my-3 p-0">
        <div className="row mx-auto justify-content-center">
          <img
            loading="lazy"
            src="./images/about.png"
            alt=""
            className="col-12 col-sm-12 col-md-5 my-auto"
            height="100%"
          />
          <p
            className="col-12 col-sm-12 col-md-6 text-justify my-auto py-3"
            id="about1"
          >
            &emsp;&emsp;Greeting, If you wish to know about us, we are group 7
            in CS260. Of course, our group member consists of four people
            including me of course me Juden Ung, Jemmy Seang, Mouthe Ty, and
            Pithonin Hengpan. Our group wish to present to you our join effort
            web project for this semester. This website project focus on the
            idea of collecting information regarding each products from
            different websites to store in our website for the benefit of many
            users especially online shopper and supplier to use our website to
            their benefits. For our website name "TechSec" here come from the
            ideas that our website symbolise as a technology operate in a second
            to produce result to our users as we want our website to stand out
            among other website when it come to speed of naviagation. This name
            will tell you our vision for this website to become a market place
            to advertise and store future incoming products informations for you
            to enjoy. We create this website in an intention and motivation to
            helps customers and suppliers out there a profitable environment for
            their demands, so we decide to create this websites to help fulfil
            that.
            <br />
            &emsp;&emsp;Why don't you give our website a go?
          </p>
        </div>
      </div>

      <hr />
      <h1 className="text-center" id="About-Problem">
        Our Story
      </h1>
      <hr />
      <div className="container my-3 p-0">
        <div className="row mx-auto justify-content-center">
          <p
            className="col-12 col-sm-12 col-md-6 text-justify py-3 my-auto"
            id="about2"
          >
            &emsp;&emsp; During our first initial search, we planned to do
            online shopping and plan our wishlist before christmas, but our time
            to do online searching have wasted a lot of time by going through
            from one website to another website. One night, when we found the
            product that we want to buy and ordered it. The next day, one of us
            discover the other website offers the same product and we were
            frustrated with the fact that there are other websites who offer the
            same thing in cheaper price. That frustration led us to argue and
            debate whether the price that the supplier offer is accurate or not.
            To solve the doubt of the price accuracy and the time consumption
            issue, we decide to create a website where all supplier gather to
            compete and we implement a best search algorithm to serve the
            consumer at an instance.
          </p>
          <img
            loading="lazy"
            src="./images/stress.png"
            alt=""
            className="col-12 col-sm-12 col-md-5 my-auto"
            height="100%"
          />
        </div>
      </div>

      <hr />
      <h1 className="text-center" id="About-solution">
        Solution
      </h1>
      <hr />
      <div className="container p-0">
        <div className="row p-0 mx-auto justify-content-center" id="about3">
          <div className="text-center border border-secondary col-10 col-md-4 p-0 m-0 my-2">
            <img
              loading="lazy"
              src="./images/view.png"
              alt=""
              className="col-12 m-0 p-0"
              width="100%"
            />
            <p className="m-2" id="text-1">
              Create a website where users can view all the information and
              catch up to the global market price of the product.
            </p>
          </div>

          <div className="text-center border border-secondary col-10 col-md-4 p-0 m-0 my-2">
            <img
              loading="lazy"
              src="./images/skim.png"
              alt=""
              className="col-12 m-0 p-0"
              width="100%"
            />
            <p className="m-2" id="text-2">
              Create a website can view the products where users can select or
              skim through base on their interest.
            </p>
          </div>

          <div className="text-center border border-secondary col-10 col-md-4 p-0 m-0 my-2">
            <img
              loading="lazy"
              src="./images/best.jpeg"
              alt=""
              className="col-12 m-0 p-0"
              width="100%"
            />
            <p className="m-2" id="text-3">
              Make users use our website as an alternative to users repeatedly
              search from one website to another on the internet.
            </p>
          </div>
        </div>
      </div>

      <hr />
      <h1 className="text-center" id="About-Benefit">
        Benefit
      </h1>
      <hr />
      <div className="container justify-content-center p-0 my-4">
        <div className="row mx-auto" id="about4">
          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/usernmanage.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">
              Users & Supplier Management
            </p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/productManage.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">Products Sorting</p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/speaker.jpeg"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">
              Product Advertisement
            </p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/chat.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">
              Chat & Recommendation
            </p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/deal.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">
              Login Platform (Users & Suppliers)
            </p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/price_manage.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">
              Price Management/Sorting
            </p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/save_time.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">Time Saving</p>
          </div>

          <div className="text-center border border-secondary col-6 col-md-3 m-0 p-0">
            <img
              loading="lazy"
              src="./images/goal.png"
              alt=""
              className="col-12 p-0 m-0"
              width="100%"
            />
            <p className="m-2 font-weight-bold py-auto">Goal Reachability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
