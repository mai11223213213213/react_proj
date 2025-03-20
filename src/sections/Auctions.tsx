import React from "react";

import Heading from "../components/Heading";
import { Carousel } from "@mantine/carousel";
import Button from "../components/Button";
import auction1 from "../assets/img/crads/auction-1.png"
import auction2 from "../assets/img/crads/auction-2.png"
import auction3 from "../assets/img/crads/auction-3.png"
import users from "../assets/img/users/user-icon.png"
import like_icon from "../assets/img/crads/like.svg"
import {ReactComponent as Icon1} from "../assets/img/arrowRight.svg"
import {ReactComponent as Icon2} from "../assets/img/arrowLeft.svg"
import Card from "../components/Card";

export type card = {
  img: string,
  price: string,
  likes: number,
  time: string,
  authorName: string,
  authorTag: string,
  authorImage: string,

}
const cards: card[] = [
  {
    img: auction1,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: users,
  },
  {
    img: auction2,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: users,
  },
  {
    img: auction3,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: users,
  },
  {
    img: auction1,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: users,
  },
  {
    img: auction2,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: users,
  },
  {
    img: auction3,
    price: "4.89 ETH",
    likes: 92,
    time: "03:18:24",
    authorName: "Virtual Art",
    authorTag: "@wzard",
    authorImage: users,
  },
];

// const carousel = cards.map((card) => (
//           <Carousel.Slide>
//             <div className="card">
//               <div
//                 className="image"
//                 style={{
//                   backgroundImage: `url(${card.img})`,
//                 }}
//               >
//                 <span className="timer">{card.time}</span>
//               </div>
//               <div className="title">
//                 <div className="author">
//                   <div className="left-part">
//                     <div className="author-icon">
//                       <img src={card.authorImage} alt="author-icon" />
//                     </div>
//                     <div className="author-info">
//                       <span className="author-name">{card.authorName}</span>
//                       <span className="author-tag">by {card.authorTag}</span>
//                     </div>
//                   </div>
//                   <div className="right-part">
//                     <div className="likes">
//                       <img
//                         src={like_icon}
//                         alt="like-icon"
//                         className="like-icon"
//                       />
//                       <span>{card.likes}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="price">
//                 <span>Current Bid</span>
//                 <span className="price-value">{card.price}</span>
//               </div>
//               <div className="place-bid">
//                 <Button
//                   padding="21px 145px"
//                   textColor="#fff"
//                   bgColor="#e9d7a7"
//                   bgOpacity={0.1}
//                   borderColor="#fde8b3"
//                 >
//                   Place a bid
//                 </Button>
//               </div>
//             </div>
//           </Carousel.Slide>
//         ))
const Auctions = () => {
  return (
    <div className="auctions">
      <Heading bubleColor="#8613A5">Live Auctions</Heading>

      <Carousel
        slideSize="28%"
        height={691}
        align="start"
        slideGap="45px"
        controlsOffset="xs"
        controlSize={40}
        loop
        nextControlIcon={<Icon1 width={"54px"} height={"54px"}/>}
        previousControlIcon={<Icon2 width={"54px"} height={"54px"}/>}
      >
        {cards.map((card)=>(<Card card={card}/>))}
        {cards.map((card)=>(<Card card={card}/>))}
      </Carousel>

      <Button padding="24px 65px" textColor="#fff" borderColor="#ffce4e" style={{width:"fir-content", margin:"0 auto"}}>View all</Button>
    </div>
  );
};

export default Auctions;