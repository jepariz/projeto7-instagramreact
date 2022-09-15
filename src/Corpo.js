import Posts from "./Posts";
import Sidebar from "./SideBar";
import Stories from "./Stories";



export default function Corpo (){
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories/>
                <Posts/>
            </div>
                <Sidebar/>
        </div>
    )
}