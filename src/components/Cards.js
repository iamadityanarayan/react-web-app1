import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
                  imageSrc='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Adventure'
                  path='/services'
              />
              <CardItem 
                  imageSrc='https://upload.wikimedia.org/wikipedia/commons/b/b4/Adventure-clouds-environment-672358.jpg'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Luxury'
                  path='/services'
              />
              {/* <CardItem 
                  imageSrc='https://img.redbull.com/images/c_crop,x_0,y_130,h_1878,w_2816/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2018/04/18/3defc76b-795c-4cfa-a005-c2fabd43f6fb/adventure-travel-cliff'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Over the Sea'
                  path='/services'
              /> */}
            </ul>
            <ul className="cards__items">
              <CardItem 
                  imageSrc='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Adventure'
                  path='/services'
              />
              <CardItem 
                  imageSrc='https://upload.wikimedia.org/wikipedia/commons/b/b4/Adventure-clouds-environment-672358.jpg'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Luxury'
                  path='/services'
              />
              <CardItem 
                  imageSrc='https://img.redbull.com/images/c_crop,x_0,y_130,h_1878,w_2816/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2018/04/18/3defc76b-795c-4cfa-a005-c2fabd43f6fb/adventure-travel-cliff'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Over the Sea'
                  path='/services'
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
