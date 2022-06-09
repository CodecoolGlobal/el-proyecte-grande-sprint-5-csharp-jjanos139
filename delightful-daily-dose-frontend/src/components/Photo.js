export default function Photo(props) {
    return (
        <div id={props.divid}>
            <h5 className={props.dark === "dark" ? "text-center dark" : "text-center"}>{props.title}</h5>
            <div className={props.dark === "dark" ? "photo-outer-div dark" : "photo-outer-div"}>
                <img id={props.imgid} className={props.dark === "dark" ? "photo-light dark" : "photo-light"} alt="" />
            </div>
        </div>
    )
}