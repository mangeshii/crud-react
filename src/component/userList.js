import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import{set_celebrities} from "../redux/actions/celebrityAction"
import celebrityData from "../json/celebrity.json"

const UserList = () => {
    const data=useSelector((state)=>state.setCelebrity.celebrityData)
    const dispatch=useDispatch()

    dispatch(set_celebrities(celebrityData))
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column" >
                <div className="accordion w-100 pt-5 pb-4" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList