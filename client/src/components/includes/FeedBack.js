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
    const starsFeedback = (star) => {
        let arrStars = [];
        for(let i =0; i<star; i++){
            arrStars.push(<FaStar key={i}/>);
        }
        return arrStars;
    }
    const renderItemFeedBack = () => {
        return listFeedBack.map( (feedBack, key)=>{
            
            if(feedBack.idProduct == id){
                return(
                    <div className='item-feedback' key={key}>
                        <div className='avatar-user'>
                            {listUser.map((user, key)=> {
                                    if(user.id == feedBack.idUser){
                                        if(user.imgUser == ''){
                                            return(
                                                <FaUserCircle key={key}/>
                                            )
                                        } else{
                                            return <img src={`.${user.imgUser}`} alt='' key={key}/>  
                                        }
                                    } 
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
                                    {starsFeedback(feedBack.evaluate)}
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
                                    {
                                        listImgFeedBack.map((img, key)=>{
                                            if(feedBack.id == img.idFeedBack){
                                                return(
                                                    <div className='item-img' key={key}>
                                                        <img src={`.${img.img}`} alt=''/>
                                                    </div>
                                                )
                                            }
                                        })                                        
                                    }
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