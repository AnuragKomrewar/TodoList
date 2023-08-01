import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";

const Tabs=({currentTab})=>{
    const dispatch=useDispatch();
    return(
        TABS.map(
            tab=>(
                <button className= {tab===currentTab ?'tabs_button selected' : "tabs_button" }
                 onClick={()=>dispatch(toggleTab(tab))}> {/*CSS is in app.css */}
                    {tab}
                </button>
            )
        )
    )
}
export default Tabs;