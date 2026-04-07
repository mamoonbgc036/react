import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Footer() {
    const user = useContext(UserContext)
    return (
        <p>I am {user}</p>
    )
}
