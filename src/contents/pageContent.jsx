import { useParams } from "react-router-dom";
import Latex from "react-latex"
import AnimateHeight from 'react-animate-height';
import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

export const ContentBox = ({ topics, title, description, equation, definition }) => {
  const [height, setHeight] = useState(false);
  const [contentLock, setContentLock] = useState(false);


  return <div className="flex w-full h-fit justify-center bg-white bg-opacity-30 rounded-lg shadow-md backdrop-blur-sm ">

    <div className="flex flex-col p-3 w-full gap-2">
      <button
        className={"absolute w-fit top-4 right-4 bg-white rounded-full transition-all " + (contentLock ? "p-4 bg-opacity-50 -translate-y-1.5 translate-x-1" : "p-3 bg-opacity-20")}
        onClick={() => setContentLock(!contentLock)}>
        {contentLock ?
          <FaUnlock width="10" height="10" fill="white" /> :
          <FaLock width="10" height="10" fill="white" />
        }
      </button>

      <button
        className="w-full"
        aria-expanded={height !== 0}
        aria-controls="panel"
        onClick={() => {
          if (!contentLock) setHeight(height === 0 ? 'auto' : 0)
        }}
      >
        <AnimateHeight
          id="panel"
          duration={500}
          height={height}>

          <div className="flex justify-between">
            <div className="flex gap-2">
              {topics.map((topic) =>
                <p className="w-fit p-1 px-2 text-white text-lg font-semibold bg-white bg-opacity-30 rounded-lg shadow-md">{topic}</p>
              )}
            </div>
          </div>

        </AnimateHeight>
        <p className="w-full pt-2 text-white text-4xl font-extrabold text-left">{title}</p>

        <AnimateHeight
          id="panel"
          duration={500}
          height={height}
        >
          <p className="pb-2 w-full text-left text-white text-lg font-medium pl-1">{description}</p>
          <div className="flex gap-1">
            <div className="p-4 min-w-fit text-white text-2xl bg-white bg-opacity-20 rounded-lg shadow-md flex-grow">
              <p className="w-full text-center font-sans"><Latex>{equation}</Latex></p>
            </div>
            <table className="gap-2">
              {definition.map(([key, value]) =>
                <tr className="w-">
                  <td><p className="p-1 my-0.5  text-white text-lg font-medium text-center bg-white bg-opacity-30 rounded-lg shadow-md">{key}</p></td>
                  <td><p className="p-1 text-white text-lg font-medium bg-opacity-30 text-left break-all">{value}</p></td>
                </tr>
              )}
            </table>
          </div>
        </AnimateHeight>
      </button>
    </div>

  </div>

}

export const PageContentTemplate = () => {
  const { topic } = useParams()

  return (
    <div className="flex flex-row justify-center min-h-screen overflow-clip">
      <div className="flex flex-col w-full bg-[url('../src/assets/bg.jpg')] bg-fixed bg-cover justify-center gap-5">

        <div className="my-10"></div>
        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
          {topic}
        </p>

        <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] sm:w-4/6 md:w-1/2 w-4/6 font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            description
          </div>
        </div>

        <div className="w-full flex justify-center mb-1 mt-2">
          <hr className="w-4/6 border-y-2 opacity-60"></hr>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex flex-col w-4/6 gap-2">
            <ContentBox
              topics={["เซต", "เพาเวอร์เซต"]}
              title="จำนวนสมาชิกเพาเวอร์เซต์"
              description="A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A"
              equation="$n(P(A)) = 2^{n(A)}$"
              definition={[
                ["A", "A เป็นเซตใดๆ"],
                ["n(A)", "จำนวนสมาชิกเซต A"]
              ]} />
            <ContentBox
              topics={["เซต", "เพาเวอร์เซต"]}
              title="จำนวนสมาชิกเพาเวอร์เซต์"
              description="A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A"
              equation="$n(P(A)) = 2^{n(A)}$"
              definition={[
                ["A", "A เป็นเซตใดๆ"],
                ["n(A)", "จำนวนสมาชิกเซต A"]
              ]} />
          </div>
        </div>

      </div>
    </div>
  );
}