import Card from 'react-bootstrap/Card';

export default function Credits() {
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    <h4 style={{ marginLeft: "120px" }}>This is us:</h4>
                    <Card>
                        <img className="credits-image" alt="" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg" />
                        <p className="credits-name">Tamás Bosánszki</p>
                    </Card>
                    <Card>
                        <img className="credits-image" alt="" src="https://www.thehindu.com/sci-tech/energy-and-environment/i99k2c/article36498686.ece/alternates/LANDSCAPE_615/19SM-leopard-5" />
                        <p className="credits-name">András Gál</p>
                    </Card>
                    <Card>
                        <img className="credits-image" alt="" src="https://a-z-animals.com/media/animals/images/original/panther.jpg" />
                        <p className="credits-name">János Jankovics</p>
                    </Card>
                </div>
            </main>
        </div>
    )
}