import style from "@/css/locofy.module.css";
import DashboardPause from "@/components/locofysample";

export default function Locofy(){
    return(
        <>
            <div className={style.loco}>
                <DashboardPause />
            </div>
        </>
    )
}