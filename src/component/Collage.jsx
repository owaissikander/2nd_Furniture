
import CollageImage from "../images/images.png"
import ShoppingDrawer from "./ShoppingDrawer";
function Collage() {

    return (
        <div>
            <div className="flex flex-col items-center justify-center my-12" >
                <h4 className="text-gray-400 text-xl font-bold">Share your setup with</h4>
                <h1 className="text-4xl font-bold">#FurinorFurniture</h1></div>

            <div className="w-[573px] h-[380px] mb-8"
                style={{
                    top: "253px",

                    width: "100%",
                    height: "600px",
                }}
            >
                <img src={`${CollageImage}`} />
            </div>
        </div>



    )
}

export default Collage;