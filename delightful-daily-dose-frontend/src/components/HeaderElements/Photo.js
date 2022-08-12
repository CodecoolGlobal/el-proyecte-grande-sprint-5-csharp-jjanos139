export default function Photo(props) {
    return (
        <div id={props.divid}>
            <h5 className="text-center">{props.title}</h5>
            <div className="photo-outer-div">
                <img id={props.imgid} className="photo-light" alt="" />
            </div>
        </div>
    )
}