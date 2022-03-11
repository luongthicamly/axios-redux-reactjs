import React from 'react';
import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import feedBack from '../../database/feedBack';
import imagesFeedBack from '../../database/imagesFeedBack';
import users from '../../database/users';
import './scss/feedback.scss';

function FeedBack(props) {
    const {id} = useParams();
    const stars = [1,2,3];
    const noneStars = [1,2,3,4,5];
    const listUser = users;
    const listFeedBack = feedBack;
    const listImgFeedBack = imagesFeedBack;
    const lengListFeedback = listFeedBack.length;
    const renderItemFeedBack = () => {
        return listFeedBack.map( (feedBack, key)=>{
            
            if(feedBack.idProduct == id){
                return(
                    <div className='item-feedback' key={key}>
                        <div className='avatar-user'>
                            {listUser.map((user, key)=> {
                                console.log(user.id, feedBack.idUser)
                                if(user.id == feedBack.idUser){
                                    return(
                                        <img src={`${users.imgUser}`} alt='' key={key}/>  
                                    )
                                } 
                                // else{
                                //     return <FaUserCircle key={key}/>
                                // }
                            })}
                            
                        </div>
                        <div className='content-feedback'>
                            <div className='info-user'>
                                {listUser.map((user, key)=> {
                                    if(user.id == feedBack.idUser){
                                        return(
                                            <p key={key}>{user.username}</p>  
                                        )
                                    }
                                })}
                                <div className='stars'>
                                    {stars.map(value => (
                                        <FaStar key={value}/>
                                        ))
                                    }
                                    <div className='none-stars'>
                                        {noneStars.map(value => (
                                            <FaRegStar key={value}/>
                                            ))
                                        }    
                                    </div>
                                </div>
                            </div> 
                            <div className='info-feedback mt-2'>
                                <div className='time-feedback'>
                                    {feedBack.date}
                                </div>
                                <div className='comment-feedback mt-2'>
                                    {feedBack.comment}
                                </div>
                                <div className='img-feedback mt-4'>
                                    <div className='item-img'>
                                        <img src='../images/product/img1.jpg' alt=''/>
                                    </div>
                                    <div className='item-img'>
                                        <img src='../images/product/img2.jpg' alt=''/>
                                    </div>
                                    <div className='item-img'>
                                        <img src='../images/product/img3.jpg' alt=''/>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                )
            }
        })
    }   
    return (
        <>
        {renderItemFeedBack()}
        </>
    );
}

export default FeedBack;