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
        title: "จำนวนสมาชิกเพาเวอร์เซต์อีกอัน",
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
        topics: ["เซต"],
        title: "เซตจำกัด (Finite Set)",
        description: "เซตที่สามารถนับจำนวนสมาชิกได้ครบถ้วน สามารถบอกได้ว่ามีจำนวนสมาชิกเท่าใด เป็นจำนวนเต็มบวกหรือศูนย์",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230821134905/Venn-Diagram-of-Finite-Sets-min.png",
    }),
    ContentBoxCreator.fromObject({
        "topics": ["เซต", "ฟังก์ชัน"],
        "title": "ฟังก์ชันต่อเนื่อง",
        "description": "ฟังก์ชันต่อเนื่อง คือ ฟังก์ชันที่กราฟไม่ขาดตอน",
        "equation": SpecialText.fromString("$f ต่อเนื่องที่ x=c$", true),
        "definition": [
            [SpecialText.fromString("$f$", true), "ฟังก์ชันใดๆ"],
            [SpecialText.fromString("$c$", true), "จุดใดๆ"]
        ]
    }),
    ContentBoxCreator.fromObject({
        "topics": ["พีชคณิต", "สมการ"],
        "title": "สมการกำลังสอง",
        "description": "สมการกำลังสองเป็นสมการที่มีตัวแปรหนึ่งและค่าสัมประสิทธิ์ในรูปของกำลังสอง",
        "equation": SpecialText.fromString("$ax^2+bx+c=0$", true),
        "definition": [
            [SpecialText.fromString("$a$", true), "ค่าสัมประสิทธิ์ของ x^2"],
            [SpecialText.fromString("$b$", true), "ค่าสัมประสิทธิ์ของ x"],
            [SpecialText.fromString("$c$", true), "ค่าคงที่"]
        ]
    }),
    ContentBoxCreator.fromObject({
        "topics": ["แคลคูลัส", "ปริพันธ์"],
        "title": "ปริพันธ์ไม่จำกัด",
        "description": "ปริพันธ์ไม่จำกัดคือปริพันธ์ของฟังก์ชันที่ไม่สามารถหาค่าปริพันธ์ได้โดยใช้กฎปริพันธ์พื้นฐาน",
        "equation": SpecialText.fromString("$\\int_a^b f(x) dx$", true),
        "definition": [
            [SpecialText.fromString("$a$", true), "จุดเริ่มต้นของปริพันธ์"],
            [SpecialText.fromString("$b$", true), "จุดสิ้นสุดของปริพันธ์"],
            [SpecialText.fromString("$f(x)$", true), "ฟังก์ชันที่ต้องการหาปริพันธ์"]
        ]
    })

]