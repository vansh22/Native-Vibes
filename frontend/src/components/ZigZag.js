import React from 'react';
import './ZigZag.css';

const data = [
  {
    id: 1,
    title: 'How to experience India at it’s best ?',
    description: 'We suggest you to consider rural India while planning your trip, ask us to combine your trip during an Indian Festival which will make your trip a great experience. At each city you visit our guides will tell you about the cultural activities taking place that might be interesting.',
    img: 'https://thedailyguardian.com/wp-content/uploads/2020/08/np-1.png',
  },
 
  {
    id: 2,
    title: 'How can I come in contact with local people during our travel in India ?',
    description: 'Indians are hospitable and friendly people. Most of the people you talk to you will find friendly. Follow the golden rule in India (especially for Women, when travelling in India): Always speak to the people you feel like talking to. Avoid people who are too eager to help you or want you to buy you something.',
    img: 'https://thesecondangle.com/wp-content/uploads/schema-and-structured-data-for-wp/10-Most-Beautiful-Lakes-To-Visit-In-India-1200x675.jpg',
  },
  {
    id: 3,
    title: 'How to give feedback and reviews?',
    description: 'For resources about India, Please visit our website page “Travel Information”. You may put up your questions to us regarding any matter if you do not find the answers on our website. Apart from that we suggest you to do some background reading before visiting India, so that your visit becomes a great experience.',
    img: 'https://indbiz.gov.in/wp-content/uploads/2019/01/Religious-tourism-offer-strong-opportunities.jpg',
  },
  {
    id: 4,
    title: 'How to use recommendation?',
    description: 'For resources about India, Please visit our website page “Travel Information”. You may put up your questions to us regarding any matter if you do not find the answers on our website. Apart from that we suggest you to do some background reading before visiting India, so that your visit becomes a great experience',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfQsBfqEAttEWlMMNKGb_qRBNdXkXQHKIeg&usqp=CAU',
  },
];

const Item = ({ id, title, description, img, isReverse }) => (
  <div className={`item ${isReverse ? 'reverse' : ''}`}>
    <div className="img-wrapper">
      <img src={img} alt={title} />
    </div>
    <div className="content">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  </div>
);

const ZigZag = () => (
  <div className="container">
    {data.map((item, index) => (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        img={item.img}
        isReverse={index % 2 !== 0}
      />
    ))}
  </div>
);

export default ZigZag;
