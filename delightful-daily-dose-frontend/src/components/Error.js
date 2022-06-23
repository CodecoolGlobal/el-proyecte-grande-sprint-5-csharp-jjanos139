import ErrorImage from "../images/error.jpg"

export default function Error() {
    return (
        <div>
            <h6 style={{ textAlign: "center" }}>There's nothing to see here!</h6>
            <img style={{ marginLeft: "450px", width: "600px" }} src={ErrorImage} alt="" />
        </div>
    )
}