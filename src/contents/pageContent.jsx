import { useParams } from "react-router-dom";
import { ContentBox, SpecialText } from "./contentBox";

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
          <div className="flex flex-col w-11/12 md:w-5/6 lg:w-4/6 gap-2">
            <ContentBox
              topics={["เซต", "เพาเวอร์เซต"]}
              title="จำนวนสมาชิกเพาเวอร์เซต์"
              description="A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A"
              equation={SpecialText.fromString("$n(P(A)) = 2^{n(A)}$", true)}
              definition={[
                [SpecialText.fromString("$A$", true), "A เป็นเซตใดๆ"],
                [SpecialText.fromString("$n(A)$", true), "จำนวนสมาชิกเซต A"]
              ]} />
            <ContentBox
              topics={["เซต", "เพาเวอร์เซต"]}
              title="จำนวนสมาชิกเพาเวอร์เซต์"
              description="A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A"
              table={[["name", "eqution"], [["number of powersest", SpecialText.fromString("$n(P(A)) = 2^{n(A)}$", true)]]]}
              definition={[
                ["A", "A เป็นเซตใดๆ"],
                ["n(A)", "จำนวนสมาชิกเซต A"]
              ]}
              video="https://www.youtube.com/embed/ZRtdQ81jPUQ" />
          </div>
        </div>

      </div>
    </div>
  );
}