import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Status = () => {
    const {status} = useContext(AppContext)
    return (
        <div className="status">{status}</div>
    )
}

export default Status;