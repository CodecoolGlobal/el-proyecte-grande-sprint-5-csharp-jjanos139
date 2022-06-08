export default function DateAndName() {
    let now = new Date();
    let date = now.toISOString().slice(0, 10) + ", " + now.toLocaleDateString('hu-hu', { weekday: 'long' }).charAt(0).toUpperCase() + now.toLocaleDateString('hu-hu', { weekday: 'long' }).slice(1);

    return (
        <div id="date-and-name">
            <text id="datetime" className="nav-link">{date}</text>
            <text className="nav-link" id="nameday"></text>
        </div>
    )
}