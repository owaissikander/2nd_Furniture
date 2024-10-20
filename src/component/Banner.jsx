
import images from "../images/bannerInput.png"
import ShoppingDrawer from "./ShoppingDrawer";
function Banner() {
    const onClose = () => {
        setOpen(false);
    };
    return (


        <div
            className="w-full h-screen bg-no-repeat bg-cover"
            style={{
                top: "95.7px",
                width: "100%",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",

                backgroundRepeat: "no-repeat",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKx2kWpHDrFvf1gIsCdzjlgHdj-enjUkQpXWQfgoaA~GJ~iD8Y54inQzhHyifkFmdaoZGw75zHxw~91Xie6Apukh4VS77KKz3WRHh60L3QF~aCJZqBaQAmNda-FFTCpEywkrpPp3EjsHzWy3CMiNd1LSYAWOfOvgKKeRKn86E-gy0~NBAvd-yZDq5-sAmfX2vyREPJFfNccJ7Nu6vgqX3ncKhA7emQ3248-p3-3k50oWHfpN~JCCSaugLgh32OamcW0dzVAbRE~5yhpbfl9S1vDAToR20PnF~7vHY9yrEzPiTjH3sUTr5MWdAjkkeCWh-3MWwiXdhALbMx3VG7WAAg__ )`
            }}>
            {/* banner ka ander wali image */}
            <div className="w-[573px] h-[380px]"
                style={{
                    zIndex: "auto",
                    top: "253px",
                    left: "739px",
                    position : "absolute"
                }}
            >
                <img src={`${images}`} />
            </div>

        </div >


    )
}

export default Banner;