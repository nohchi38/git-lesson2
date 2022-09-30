
import React from "react"
import MyPosts from "./MypPosts/MyPosts";
import s from './Profile.module.css';


const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </div>


}

export default Profile;