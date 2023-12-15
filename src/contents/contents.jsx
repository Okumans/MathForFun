import { ContentBoxCreator, SpecialText } from "./contentBox"

export const sampleContents = [
    ContentBoxCreator.fromObject({
        topics: ["เซต", "เพาเวอร์เซต"],
        title: "จำนวนสมาชิกเพาเวอร์เซต์",
        description: "A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A",
        equation: SpecialText.fromString("$n(P(A)) = 2^{n(A)}$", true),
        definition: [
            [SpecialText.fromString("$A$", true), "A เป็นเซตใดๆ"],
            [SpecialText.fromString("$n(A)$", true), "จำนวนสมาชิกเซต A"]
        ]
    }),
    ContentBoxCreator.fromObject({
        topics: ["เซต", "เพาเวอร์เซต"],
        title: "จำนวนสมาชิกเพาเวอร์เซต์",
        description: "A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A",
        table: [
            [SpecialText.fromString("name", false), "eqution"], 
            [["number of powersest", SpecialText.fromString("$n(P(A)) = 2^{n(A)}$", true)]]
        ],
        definition: [
            ["A", "A เป็นเซตใดๆ"],
            ["n(A)", "จำนวนสมาชิกเซต A"]
        ],
        video: "https://www.youtube.com/embed/ZRtdQ81jPUQ"
    }),
    ContentBoxCreator.fromObject({
        topics:["เซต"],
        title:"เซตจำกัด (Finite Set)",
        description:"เซตที่สามารถนับจำนวนสมาชิกได้ครบถ้วน สามารถบอกได้ว่ามีจำนวนสมาชิกเท่าใด เป็นจำนวนเต็มบวกหรือศูนย์",
        image:"https://media.geeksforgeeks.org/wp-content/uploads/20230821134905/Venn-Diagram-of-Finite-Sets-min.png",
    })
]
