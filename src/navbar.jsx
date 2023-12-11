export const Navbar = () => {
    return <>
        <div className="fixed min-w-full min-h-fit">

            <div className="w-full h-fit [background:linear-gradient(180deg,rgb(0,0,0)_0%,rgb(43.57,12.47,68)_99.98%,rgb(28.05,0,63.75)_99.99%)]">
                <div className="flex items-center justify-between px-5">
                    <div className="flex items-center">
                        <img className="h-[100px] object-cover" alt="Logo" src="src/assets/logo.png" />
                        <div className="font-medium text-white text-lg">
                            เรื่อง
                        </div>
                    </div>
                    {/* <img className="w-[11px] h-[10px] top-[36px] left-[222px]" alt="Polygon" src="polygon-1.svg" /> */}
                    <p className="right-10 opacity-70 font-medium text-white text-lg">
                        อ้างอิง
                    </p>
                </div>
            </div>

        </div>
    </>
}