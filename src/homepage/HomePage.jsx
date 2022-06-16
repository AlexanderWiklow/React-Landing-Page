function LandingFrame() {
    const style = {
                "background-image": `url("images/wallpaper.jpeg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }

    return <div style={style}></div>
}

function HomePage() {

    // const containerStyle = {
    //     margin: "10% 20% 10% 20%",
    //     backgroundColor: "lightblue",
    //     height: "80vh"
    // }

    // return <div style={containerStyle}>
    //     This is the home page
    // </div>

    return <div>
            <LandingFrame/>
                </div>
}

export default HomePage