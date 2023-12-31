import "../styles/global.css"
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const LeftMenu = () => {
    return (
        <>
            <div className="left-menu">
                <div className="upper-icons">
                    <div className="my-pp">
                         <FaRegUser/>
                    </div>
                    <div className="my-messages">
                        <AiOutlineMessage />
                    </div>
                    <div className="createRoom">
                      <FaHouse/>
                    </div>
                </div>
                <div className="bottom-icons">
                    <div className="leave-app">
                       <IoExitOutline />
                    </div>
                </div>

            </div>

        </>
    )
}

export default LeftMenu