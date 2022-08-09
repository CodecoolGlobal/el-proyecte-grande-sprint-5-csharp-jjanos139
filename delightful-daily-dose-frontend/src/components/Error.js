import ErrorImage from "../images/error.jpg"

export default function Error() {
    return (
        <div>
            <img src={ErrorImage} alt="error" style={{ width: "50%", marginLeft: "25%", marginTop: "50px" }}></img>
        </div>
    )
}