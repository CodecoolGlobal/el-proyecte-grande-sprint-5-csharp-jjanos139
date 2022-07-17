import ErrorImage from "../images/error.jpg"

export default function Error() {
    return (
        <div>
            <img src={ErrorImage} style={{ width: "50%", marginLeft: "25%", marginBottom: "50px", marginTop: "50px" }}></img>
        </div>
    )
}