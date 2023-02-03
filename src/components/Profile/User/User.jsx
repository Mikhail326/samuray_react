import s from '../User/User.module.css'
import preloader from '../../../img/preloader.gif'

export const User = ({profile}) => {
    console.log(profile)
    if(Object.keys(profile).length === 0) {
        return(
            <img src={preloader} alt="" />
        )
    }
    return (
        <div className={s.user}>
            <div className={s.user_background}>
                <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612731927_212-p-fon-sochetayushchiisya-s-golubim-245.jpg" alt="" />
            </div>
            <div className={s.user_description}>
                <img src={profile.photos.large} alt=""/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>поиск работы: {profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}