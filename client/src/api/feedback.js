import feedBack from '../database/feedBack'
import users from '../database/users'

const feedBackWithUser = () => {
    return feedBack.map(fb => {
        let user = users.filter(u => u.id == fb.idUser)
        return { ...fb, username: user[0].username }
    })
}
export default feedBackWithUser;