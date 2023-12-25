export const ReferencePage = () => {  
    return (
        <div className="flex flex-row justify-center min-h-screen" >
          <div className="flex flex-col w-full bg-[url('src/assets/bg.jpg')] bg-fixed bg-no-repeat bg-cover items-center gap-3">
            <div className="my-10 md:my-16"></div>
            <div className=" flex justify-center w-2/3 md:w-1/2 lg:w-1/3">
                 <img src="src/assets/Opink.png" className="rounded-xl"></img>
            </div>

            <div className="flex h-fit bg-white bg-opacity-30 rounded-lg shadow-md backdrop-blur-sm max-w-4xl p-3 w-11/12 md:w-5/6 lg:w-4/6">
                <p className="text-lg md:text-2xl lg:text-4xl text-white font-bold">ประวัติการศึกษา/ผลงาน</p>
            </div>
            <div className="w-full flex justify-center mb-1 mt-2">
              <hr className="w-4/6 border-y-2 opacity-60"></hr>
            </div>
          </div >
        </div >
      );
}