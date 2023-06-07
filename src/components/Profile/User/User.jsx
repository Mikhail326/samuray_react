import s from '../User/User.module.css'
import preloader from '../../../img/preloader.gif'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

export const User = ({ profile }) => {
    if (Object.keys(profile).length === 0) {
        return (
            <img src={preloader} alt="" />
        )
    }
    return (
        <div className={s.user}>
            <div>
            </div>

            <div className={s.user_description}>
                <img src={profile.photos.large} alt="" />
               <ProfileStatus />
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>поиск работы: {profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}