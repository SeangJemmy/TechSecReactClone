import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function Faq() {
  SetRouteTitle("TechSec ~ FAQ");
  return (
    <div className="m-3">
      <div className="container">
        <div className="header-faq">
          <h1 className="text-white">FAQ</h1>
        </div>
        <div className="box">
          <details className="dt">
            <summary>How can I buy phone from your website ?</summary>
            <li>
              Answer: Our website main prioroty has no connection to handle
              financial transaction. Our website is to show a list of products
              on sale in our website base on the category. Our plateform is
              create to provide a safe environment for selling and buying
              product available on our website by connecting buyer directly to
              the seller.{" "}
            </li>
          </details>
          <details className="dt">
            <summary>How can I contact a seller ?</summary>
            <li>
              Answer: Our wesite will provide you a seller phone number or email
              in the below of the item you want buy. In addition, you can post
              about that product in the forum amd mention the seller name. The
              seller will get notified about your enquiry.{" "}
            </li>
          </details>
          <details className="dt">
            <summary>How to become a seller in your website ?</summary>
            <li>
              Answer: To become a seller in our website, you can register and
              create ur account in the login section. Then go to the Product
              section in the website and add your product there as a seller.
            </li>
          </details>
          <details className="dt">
            <summary>How do I find the product ?</summary>
            <li>
              Answer: You can search for the product name in the search bar or
              you can find your desire product by going through the given
              categories in the product section.{" "}
            </li>
          </details>
          <details className="dt">
            <summary>
              What to do if seller sell different price from the post ?
            </summary>
            <li>
              Answer: Please contact our customer service or email us directly,
              we have a strict policy regarding people who put false price on
              their product and after we received your complain we will check to
              see if it proven to be true or not before giving out warning to
              the seller. If the seller continue to do such act after the
              warning, they will be{" "}
              <font color="red">
                <b>BAN</b>
              </font>{" "}
              from our website.
            </li>
          </details>
          <details className="dt">
            <summary>
              Does the website guarantee the selling and buying between sellers
              and customers ?
            </summary>
            <li>
              Answer:Our website help connect the customer to seller but will
              not interfere with the buying or selling process between them as
              we respect your individual right and believe in freedom of choice
              and responsibility. This website only intervene by making a record
              of the transaction if the customer and supplier need a third party
              person to gaurantee the the buying and selling process.{" "}
            </li>
          </details>
          <details className="dt">
            <summary>How can I trust a seller ?</summary>
            <li>
              Answer: You can check the seller score to see if they are
              trustworthy or not in their profile. If the seller score status is
              bad, we highly recommend you to avoid that seller if possible.
              However, If there is an instance where the sellers sell you false
              product, you can report to us and we will review the supplier once
              aagin to set their trustworthy status.{" "}
            </li>
          </details>
          <details className="dt">
            <summary>How can I tracking my order ?</summary>
            <li>
              Answer: You can get your order tracking by opening your email
              where we send you the link of your tracking order. We will send a
              link to your registered email for you to track your order after
              you marked an order. In case you haven't registered your email,
              please go to the login section and sign in your email. In case,
              you haven't received your tracking order, you can wait patiently a
              bit for us to automatically resend the link.{" "}
            </li>
          </details>
          <details className="dt">
            <summary>How can I get my tracking number ?</summary>
            <li>
              Answer: You can get your tracking number after you mark the
              product as your order wish list and make the buying and selling
              process with the buyer. After that, the supplier will notify us
              about the transaction between you both to confirm the transaction.
              We will issue a tracking number and send it to your email. Expect
              a link from us that include all of your information regarding your
              transaction process and your tracking number.
            </li>
          </details>
          <details className="dt">
            <summary>
              How can I report the seller if seller sell defect items ?
            </summary>
            <li>
              Answer: You can report to our customer service or Email and make
              sure send the product photo with other evidence. We will evaluate
              your complain base on our best ability and we will contact if we
              need more enquiry about your complain. If what you describe is
              correct, we will reevaluate the supplier trustworthy status and
              issue a warning to the supplier with a penalty.{" "}
            </li>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Faq;
