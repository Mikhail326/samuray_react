import s from '../Posts/Posts.module.css'

export const Posts = () => {
    return (
        <div className={s.posts}>
        <div>
            My Posts
        </div>
        <div>
            <textarea type="text" />
            <button>Add Post</button>
        </div>
    </div>
    )
}