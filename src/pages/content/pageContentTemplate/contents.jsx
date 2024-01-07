import { ContentBoxCreator } from "../../../contentBox"
import { SpecialText } from "../../../specialText"

export const sampleContents = [
    ContentBoxCreator.fromObject({
        references: ["เซต", "เพาเวอร์เซต"],
        title: "จำนวนสมาชิกเพาเวอร์เซต์",
        description: "A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A",
        equation: SpecialText.fromString("$n(P(A)) = 2^{n(A)}$", true),
        definition: [
            [SpecialText.fromString("$A$", true), "A เป็นเซตใดๆ"],
            [SpecialText.fromString("$n(A)$", true), "จำนวนสมาชิกเซต A"]
        ],
        keywords: ["amount", "set", '<']
    }),
    ContentBoxCreator.fromObject({
        references: ["เซต", "เพาเวอร์เซต"],
        title: "จำนวนสมาชิกเพาเวอร์เซต์อีกอัน",
        description: SpecialText.fromString("$A$ เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ $A$ เพาเวอร์เซตของ $A$", true),
        table: [
            [SpecialText.fromString("name", false), "eqution"],
            [["number of powersest", SpecialText.fromString("$n(P(A)) = 2^{n(A)}$", true)]]
        ],
        definition: [
            [SpecialText.fromString("$A$", true), "A เป็นเซตใดๆ"],
            ["n(A)", "จำนวนสมาชิกเซต A"]
        ],
        video: "https://www.youtube.com/embed/ZRtdQ81jPUQ"
    }),

    ContentBoxCreator.fromObject(
        {
            references: [
                {
                    rawContent: "เซต",
                    isLatex: false,
                    classes: ""
                },
                {
                    rawContent: "เพาเวอร์เซต",
                    isLatex: false,
                    classes: ""
                }
            ],
            title: {
                rawContent: "another จำนวนสมาชิกเพาเวอร์เซต์",
                isLatex: false,
                classes: ""
            },
            description: {
                rawContent: "A เป็นเซตใดๆ. พาวเวอร์เซต คือ เซตของสับเซตทั้งหมดของ A เพาเวอร์เซตของ A",
                isLatex: false,
                classes: ""
            },
            equation: {
                rawContent: "$n(P(A)) = 2^{n(A)}$",
                isLatex: true,
                classes: ""
            },
            definition: [
                [
                    {
                        rawContent: "$A$",
                        isLatex: true,
                        classes: ""
                    },
                    {
                        rawContent: "A เป็นเซตใดๆ",
                        isLatex: false,
                        classes: ""
                    }
                ],
                [
                    {
                        rawContent: "$n(A)$",
                        isLatex: true,
                        classes: ""
                    },
                    {
                        rawContent: "จำนวนสมาชิกเซต A",
                        isLatex: false,
                        classes: ""
                    }
                ]
            ],
            keywords: [
                {
                    rawContent: "amount",
                    isLatex: false,
                    classes: ""
                },
                {
                    rawContent: "set",
                    isLatex: false,
                    classes: ""
                },
                {
                    rawContent: "<",
                    isLatex: false,
                    classes: ""
                }
            ]
        }
    ),
    ContentBoxCreator.fromObject({
        references: ["เซต"],
        title: "เซตจำกัด (Finite Set)",
        description: "เซตที่สามารถนับจำนวนสมาชิกได้ครบถ้วน สามารถบอกได้ว่ามีจำนวนสมาชิกเท่าใด เป็นจำนวนเต็มบวกหรือศูนย์",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230821134905/Venn-Diagram-of-Finite-Sets-min.png",
    }),
    ContentBoxCreator.fromObject({
        "references": ["เซต", "ฟังก์ชัน"],
        "title": "ฟังก์ชันต่อเนื่อง",
        "description": "ฟังก์ชันต่อเนื่อง คือ ฟังก์ชันที่กราฟไม่ขาดตอน",
        "equation": SpecialText.fromString("$f$ ต่อเนื่องที่ $x=c$", true),
        "definition": [
            [SpecialText.fromString("$f$", true), "ฟังก์ชันใดๆ"],
            [SpecialText.fromString("$c$", true), "จุดใดๆ"]
        ]
    }),
    ContentBoxCreator.fromObject({
        "references": ["พีชคณิต", "สมการ"],
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
        "references": ["แคลคูลัส", "ปริพันธ์"],
        "title": "ปริพันธ์ไม่จำกัด",
        "description": "ปริพันธ์ไม่จำกัดคือปริพันธ์ของฟังก์ชันที่ไม่สามารถหาค่าปริพันธ์ได้โดยใช้กฎปริพันธ์พื้นฐาน",
        "equation": SpecialText.fromString("$\\int_a^b f(x) dx$", true),
        "definition": [
            [SpecialText.fromString("$a$", true), "จุดเริ่มต้นของปริพันธ์"],
            [SpecialText.fromString("$b$", true), "จุดสิ้นสุดของปริพันธ์"],
            [SpecialText.fromString("$f(x)$", true), "ฟังก์ชันที่ต้องการหาปริพันธ์"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["กลุ่ม", "เปอร์มิวเทชัน"],
        title: "กลุ่มเปอร์มิวเทชัน",
        description: SpecialText.fromString("กลุ่มเปอร์มิวเทชัน $S_n$ คือกลุ่มของการเรียงลำดับ $n$ วัตถุที่แตกต่างกัน", true),
        equation: SpecialText.fromString("$S_n$$ = {$การเรียงลำดับทั้งหมดของ $ n$ วัตถุ$}$", true),
        definition: [
            [SpecialText.fromString("$S_n$", true), SpecialText.fromString("กลุ่มเปอร์มิวเทชันขนาด $n$", true)],
            [SpecialText.fromString("$n$", true), "จำนวนวัตถุ"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["วง", "โพลิโนเมียล"],
        title: "วงของโพลิโนเมียล",
        description: SpecialText.fromString("วงของโพลิโนเมียล $R[x]$ คือเซตของโพลิโนเมียลทั้งหมดที่มีตัวแปร $x$ และคอนฟิกยกตัวอย่างเช่น โพลิโนเมียล $ax^2 + bx + c$", true),
        equation: SpecialText.fromString("$R[x]$ = {โพลิโนเมียลทั้งหมดที่มีตัวแปร $x$}", true),
        definition: [
            [SpecialText.fromString("$R[x]$", true), "วงของโพลิโนเมียล"],
            [SpecialText.fromString("$x$", true), "ตัวแปร"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["สนาม", "ส่วนขยาย"],
        title: "ส่วนขยายของสนาม",
        description: SpecialText.fromString("ส่วนขยายของสนาม $F$ โดย $E$ คือสนามที่เกิดจากการเพิ่มสมาชิกใหม่จาก $F$", true),
        equation: SpecialText.fromString("$E/F = \\{$สมาชิกใหม่ที่เพิ่มเข้ามาจาก $F\\}$", true),
        definition: [
            [SpecialText.fromString("$E/F$", true), "ส่วนขยายของสนาม"],
            [SpecialText.fromString("$F$", true), "สนามเริ่มต้น"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["ฟังก์ชัน", "โฮโมมอร์ฟิซึม"],
        title: "โฮโมมอร์ฟิซึม",
        description: SpecialText.fromString("โฮโมมอร์ฟิซึม $\\phi$ ระหว่างกลุ่ม $G$ และ $H$ คือฟังก์ชันที่ประสานกันระหว่างกลุ่มนั้นๆ", true),
        equation: SpecialText.fromString("$\\phi : G \\rightarrow H$", true),
        definition: [
            [SpecialText.fromString("$\\phi$", true), "โฮโมมอร์ฟิซึม"],
            [SpecialText.fromString("$G, H$", true), "กลุ่ม"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["พื้นที่เวกเตอร์", "ปริมาณ"],
        title: "พื้นที่เวกเตอร์",
        description: SpecialText.fromString("พื้นที่เวกเตอร์ $V$ เกี่ยวข้องกับการบวกและการคูณด้วยสเกลาร์", true),
        equation: SpecialText.fromString("$V$ เป็นกลุ่มที่ประสานกันระหว่างการบวกและการคูณด้วยสเกลาร์", true),
        definition: [
            [SpecialText.fromString("$V$", true), "พื้นที่เวกเตอร์"]
        ],
        keywords: ["vector", "vector area"]
    }),
    ContentBoxCreator.fromObject({
        references: ["กลุ่ม", "ผลคูณ"],
        title: "ผลคูณโดยตรงของกลุ่ม",
        description: "ผลคูณโดยตรงของกลุ่ม $G$ และ $H$ คือกลุ่มที่เกิดจากการเชื่อมต่อทุกคู่อันดับของสมาชิก",
        equation: SpecialText.fromString("$G \\times H = \\{(g, h) : g \\in G, h \\in H\\}$", true),
        definition: [
            [SpecialText.fromString("$G \\times H$", true), "ผลคูณโดยตรงของกลุ่ม"],
            [SpecialText.fromString("$G, H$", true), "กลุ่ม"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["อะไรสักอย่าง", "อิซูมออร์ฟิซึม"],
        title: "อิซูมออร์ฟิซึม",
        description: SpecialText.fromString("อิซูมออร์ฟิซึม $\\psi$ ระหว่างกลุ่ม $G$ และ $H$ คือฟังก์ชันที่เป็นการแปลงกลุ่มที่รักษาโครงสร้าง", true),
        equation: SpecialText.fromString("$\\psi : G \\cong H$", true),
        definition: [
            [SpecialText.fromString("$\\psi$", true), "อิซูมออร์ฟิซึม"],
            [SpecialText.fromString("$G, H$", true), "กลุ่ม"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["โครงสร้าง", "สมการ"],
        title: "โครงสร้างทางพีชคณิต",
        description: "โครงสร้างทางพีชคณิตกำหนดโดยสมการที่สอดคล้องกัน",
        equation: SpecialText.fromString("การกำหนดโครงสร้างทางพีชคณิตจะต้องรักษาคุณสมบัติของสมการ", true),
        definition: [
            [SpecialText.fromString("โครงสร้างทางพีชคณิต", true), "การกำหนดโดยสมการ"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["กลุ่ม", "การกระทำ"],
        title: "การกระทำของกลุ่ม",
        description: SpecialText.fromString("การกระทำของกลุ่ม $G$ บนเซต $X$ คือฟังก์ชันที่เชื่อมโยงสมาชิกของ $G$ กับการเปลี่ยนแปลงของ $X$", true),
        equation: SpecialText.fromString("$G \\curvearrowright X$", true),
        definition: [
            [SpecialText.fromString("$G$", true), "กลุ่ม"],
            [SpecialText.fromString("$X$", true), "เซต"]
        ]
    }),
    ContentBoxCreator.fromObject({
        references: ["ทฤษฎีเชิงเส้น", "ตาราง"],
        title: "ทฤษฎีเชิงเส้นของตาราง",
        description: "ทฤษฎีเชิงเส้นเกี่ยวข้องกับความสัมพันธ์ของตารางในรูปแบบของการต่อเนื่องและการเปรียบเทียบ",
        equation: SpecialText.fromString("การศึกษาคุณสมบัติของการต่อเนื่องและการเปรียบเทียบของตาราง", true),
        definition: [
            [SpecialText.fromString("ทฤษฎีเชิงเส้น", true), "การศึกษาคุณสมบัติของตาราง"]
        ]
    }),
    ContentBoxCreator.fromObject({ 
        references: [{ rawContent: "สถิติ", isLatex: false, classes: "" }], title: { rawContent: "ความแปรปรวนของตัวอย่าง", isLatex: false, classes: "" }, description: { rawContent: "เป็นการวัดระดับของความต่างกันของข้อมูลแต่ละจุดจากค่าเฉลี่ย มันบ่งบอกถึงการกระจายหรือการแตกต่างของค่าต่าง ๆ ในชุดข้อมูล", isLatex: false, classes: "test" }, equation: { rawContent: "$S^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$", isLatex: true, classes: "" }, definition: [[{ rawContent: "$S^2$", isLatex: true, classes: "" }, { rawContent: "ค่าความแปรปรวนของตัวอย่าง", isLatex: false, classes: "" }], [{ rawContent: "$n$", isLatex: true, classes: "" }, { rawContent: "จำนวนข้อมูลในตัวอย่าง", isLatex: false, classes: "" }], [{ rawContent: "$x_i$", isLatex: true, classes: "" }, { rawContent: "ค่าของข้อมูลในตำแหน่งที่  $i$", isLatex: true, classes: "" }], [{ rawContent: "$\\bar{x}$", isLatex: true, classes: "" }, { rawContent: "ค่าเฉลี่ยของตัวอย่าง", isLatex: false, classes: "" }]], keywords: [{ rawContent: "ค่าแปรปรวน", isLatex: false, classes: "" }, { rawContent: "Sample Variance", isLatex: false, classes: "" }, { rawContent: "ความแปรปรวนของตัวอย่าง", isLatex: false, classes: "" }
        ] 
    }),ContentBoxCreator.fromObject({
        references:[{rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติปิด",isLatex:false,classes:""},equation:{rawContent:"\\[ a, b \\in \\mathbb{R} \\implies a + b \\in \\mathbb{R} \\]",isLatex:true,classes:""}
    }),ContentBoxCreator.fromObject({
        references:[{rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติการสลับที่",isLatex:false,classes:""},equation:{rawContent:"\\[ a * b = b * a \\]",isLatex:true,classes:""}
    }),ContentBoxCreator.fromObject({
        references:[{rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติการเปลี่ยนกลุ่ม",isLatex:false,classes:""},equation:{rawContent:"\\[ (a * b) * c = a * (b * c) \\]",isLatex:true,classes:""}
    }),ContentBoxCreator.fromObject({
        references:[{rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติการมีเอกลักษณ์",isLatex:false,classes:""},equation:{rawContent:"$\\exists I\\forall x[x*I= x=I*x]$",isLatex:true,classes:""},definition:[[{rawContent:"I",isLatex:false,classes:""},{rawContent:"เอกลักษณ์",isLatex:false,classes:""}]]})












]