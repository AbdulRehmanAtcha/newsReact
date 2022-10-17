import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
// import Images from "./images/IMG-20221008-WA0006.jpg";

function Myheading({ heading }) {
  return (
    <h2 className="main-head">{heading}</h2>
  )
}

function Post({ author, title, description, image, content }) {
  return (
    <div className="myPost">
      <div className="author">
        <h2><span>Author: </span>{author}</h2>
      </div>
      <div className="title">
        <h2><span>Title: </span>{title}</h2>
      </div>
      <div className="description">
        <p><span>Description: </span>{description}</p>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p><span>Content: </span>{content}</p>
      </div>
    </div>
  )
}

function Page() {
  return (
    <body>
      <Myheading
        heading="Multiple Components Practice."
      />
      <Post
        author="Jarco Vianen"
        title="Apple: The Bear Case Is Most Likely"
        description="Apple has shown great financial performance and its unparalleled ecosystem provides a wide moat. Find out why I'm not buying AAPL stock."
        image="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1305769484/image_1305769484.jpg?io=getty-c-w750"
        content="The investment thesis\r\n I am a big fan of Apple Inc. (NASDAQ:AAPL) as I use many of its products on a daily basis. The iPhone, Mac, Airpods, Watch etc. have become basic necessity"
      />

      <Post
        author="Ray Massey"
        title="Tesla Model Y's new rival: Polestar's £80k 3 SUV unveiled"
        description="Order books open online from today ahead of first deliveries from next year and go into direct competition with Tesla's Model Y. Here's everything you need to know about the new Polestar 3 SUV."
        image="https://i.dailymail.co.uk/1s/2022/10/12/15/63388077-0-image-a-99_1665586113612.jpg"
        content="Performance electric car firm Polestar has launched its first zero-emissions SUV the 3 priced from £79,900 and with a range of up to 379 miles.\r\nFor an extra £5,600 you can have the addition"
      />

      <Post
        author="Dan Caplinger"
        title="Tesla and Netflix Will Make or Break the Nasdaq This Week"
        description="The tech-heavy benchmark was flying high in early trading Monday, but will it last?"
        image="https://g.foolcdn.com/editorial/images/705014/tv-watching-gettyimages-200488816-001.jpg"
        content="Stocks jumped out to a strong start to the new week as investors took some solace from measures taken internationally to calm bond markets in Europe and elsewhere."
      />

      <Post
        author="Jack Kelly"
        title="Is It Hypocritical For CEOs To Hold Multiple Roles While White-Collar Workers Cannot?"
        description="A CEO of a major global organization with a massive amount of responsibilities is able to take on other money-generating opportunities, whereas it's verboten for regular workers."
        image="https://imageio.forbes.com/specials-images/imageserve/634d74e85e53ffbcc68e9c70/0x0.jpg?format=jpg&width=1200"
        content="SpaceX owner and Tesla CEO Elon Musk. Its commonplace for CEOs and C-suite executives to hold many titles, in addition to their primary role."
      />
    </body>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));