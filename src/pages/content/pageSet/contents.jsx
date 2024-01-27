import { ContentBoxCreator } from "../../../contentBox"
import { SpecialText } from "../../../specialText"

export const setContents = [

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การเขียนเซต", isLatex: false, classes: "" }], title: { rawContent: "เซตแบบแจกแจงสมาชิก", isLatex: false, classes: "" }, description: { rawContent: "เป็นการเขียนสมาชิกทั้งหมดของเซต", isLatex: false, classes: "" }, equation: { rawContent: "เซตของสระในภาษาอังกฤษ เช่น {$a,e,i,o,u$}", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การเขียนเซต", isLatex: false, classes: "" }], title: { rawContent: "เซตแบบบอกเงื่อนไข", isLatex: false, classes: "" }, description: { rawContent: "เป็นการใช้ตัวแปรแทนสมาชิกแล้วบอกสมบัติหรือเงื่อนไข", isLatex: false, classes: "" }, equation: { rawContent: "$A = \\{ x \\mid \\text{ 3x=24}\\}$", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "ประเภทของเซต", isLatex: false, classes: "" }], title: { rawContent: "เซตว่าง", isLatex: false, classes: "" }, equation: { rawContent: "คือเซตที่ไม่มีสมาชิก หรือมีจำนวนสมาชิก 0 ตัว เขียนแทนด้วย { } หรือ $\\phi$", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "ประเภทของเซต", isLatex: false, classes: "" }], title: { rawContent: "เซตจำกัด", isLatex: false, classes: "" }, description: { rawContent: "เซตที่จำนวนสมาชิกเป็นจำนวนนับหรือเป็นศูนย์", isLatex: false, classes: "" }, equation: { rawContent: "เช่น ${2,4,6,8}$", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "ประเภทของเซต", isLatex: false, classes: "" }], title: { rawContent: "เซตอนันต์", isLatex: false, classes: "" }, description: { rawContent: "เซตที่ไม่ใช่เซตจำกัด", isLatex: false, classes: "" }, equation: { rawContent: "เช่น {$1,2,3,...$}", isLatex: true, classes: "" } }),


    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "พื้นฐานเซต", isLatex: false, classes: "" }], title: { rawContent: "เอกภพสัมพัทธ์", isLatex: false, classes: "" }, description: { rawContent: "เซตที่บอกขอบเขตของสมาชิกที่พิจารณา", isLatex: false, classes: "" }, table: [[{ rawContent: "สัญลักษณ์", isLatex: false, classes: "w-full text-center" }, { rawContent: "ความหมาย", isLatex: false, classes: "w-full text-center" }], [[{ rawContent: "$\\mathbb{N}$", isLatex: true, classes: "w-full text-center" }, { rawContent: "เซตของจำนวนนับ", isLatex: false, classes: "w-full text-center" }], [{ rawContent: "$\\mathbb{Z}$", isLatex: true, classes: "w-full text-center" }, { rawContent: "เซตของจำนวนเต็ม", isLatex: false, classes: "w-full text-center" }], [{ rawContent: "$\\mathbb{Q}$", isLatex: true, classes: "w-full text-center" }, { rawContent: "เซตของจำนวนตรรกยะ", isLatex: false, classes: "w-full text-center" }], [{ rawContent: "$\\mathbb{Q'}$", isLatex: true, classes: "w-full text-center" }, { rawContent: "เซตของจำนวนอตรรกยะ", isLatex: false, classes: "w-full text-center" }], [{ rawContent: "$\\mathbb{R}$", isLatex: true, classes: "w-full text-center" }, { rawContent: "เซตของจำนวนจริง", isLatex: false, classes: "w-full text-center" }]]] }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "สับเซตและเพาเวอร์เซต", isLatex: false, classes: "" }], title: { rawContent: "สับเซตและเพาว์เซต", isLatex: false, classes: "" }, table: [[{ rawContent: "สัญลักษณ์", isLatex: false, classes: "w-full text-center" }, { rawContent: "ความหมาย", isLatex: false, classes: "w-full text-center" }], [[{ rawContent: "$\\subseteq$", isLatex: true, classes: "w-full text-center" }, { rawContent: "เป็นสับเซตของ", isLatex: false, classes: "w-full text-center" }], [{ rawContent: "$\\subseteq$", isLatex: true, classes: "w-full text-center" }, { rawContent: "ไม่เป็นสับเซตของ", isLatex: false, classes: "w-full text-center" }]]] }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "สับเซตและเพาเวอร์เซต", isLatex: false, classes: "" }], title: { rawContent: "จำนวนสับเซตของ A หรือ จำนวนสมาชิกของ P(A)", isLatex: false, classes: "" }, equation: { rawContent: "$n(P(A))=2^{n(A)}$", isLatex: true, classes: "" }, description: { rawContent: "เพาเวอร์เซตของ $A$ คือ เซตของสับเซตทั้งหมดของ $A$ เขียนแทนด้วย $P(A)$", isLatex: true, classes: "" }, definition: [[{ rawContent: "$A$", isLatex: true, classes: "" }, { rawContent: "เป็นเซตใดๆ", isLatex: false, classes: "" }], [{ rawContent: "$n(A)$", isLatex: true, classes: "" }, { rawContent: "จำนวนสมาชิกของเซต A", isLatex: false, classes: "" }]] }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "ยูเนียน", isLatex: false, classes: "" }, description: { rawContent: "รวมทุกตัวที่อยู่ใน A และ B", isLatex: false, classes: "" }, image: "https://helpingwithmath.com/wp-content/uploads/2022/03/image-136.png", equation: { rawContent: "$A \\cup B$", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "อินเตอร์เซกซัน", isLatex: false, classes: "" }, description: { rawContent: "เอาทุกตัวใน A และ B ที่ซ้ำกัน", isLatex: false, classes: "" }, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR765_GVzRXZ7pK1P7JmNtKj6UBM7JB6836f-agTIoMPRZBa6stqaUjxTEs4xsufXx8oGs&usqp=CAU", equation: { rawContent: "$A \\cap B$", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "คอมพลีเมนต์", isLatex: false, classes: "" }, description: { rawContent: "เอาทุกตัวที่ไม่อยู่ใน A", isLatex: false, classes: "" }, image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/419087159_725723369540647_8635856398001060534_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeE99lfQiMxsraFWdkbf3QgDj5T2MNbd_ruPlPYw1t3-u6ygy5MVScvcUZOdp7mp2zuaJuPAVYTyw--v9Vu8DqjJ&_nc_ohc=tIJTPsDn5Q0AX8m6P4W&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRUfUsDbfA-rPJKYuC7gPhOsSJHYFMqRLXyX7DLg-y9nw&oe=65CB75C7", equation: { rawContent: "$A'$", isLatex: true, classes: "" } }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "ผลต่าง", isLatex: false, classes: "" }, description: { rawContent: "เอาทุกตัวใน A ที่ไม่อยู่ใน B", isLatex: false, classes: "" }, image: "https://qph.cf2.quoracdn.net/main-qimg-5c3747eaf8795695b8c197ad5d0a8143", equation: { rawContent: "$A-B$", isLatex: true, classes: "" } }),


    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "สูตรการดำเนินการของเซต", isLatex: false, classes: "" }, table: [[{ rawContent: "ลำดับสูตร", isLatex: false, classes: "" }, { rawContent: "สูตร", isLatex: false, classes: "" }], [[{ rawContent: "สูตรที่ 1", isLatex: false, classes: "" }, { rawContent: "$A \\cup B$ = $B \\cup A$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 2", isLatex: false, classes: "" }, { rawContent: "$A \\cap B$ = $B \\cap A$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 3", isLatex: false, classes: "" }, { rawContent: "$A \\cap (B \\cup C)$ = $(A \\cap B) \\cup (A \\cap C)$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 4", isLatex: false, classes: "" }, { rawContent: "$A \\cup (B \\cap C)$ = $(A \\cup B) \\cap (A \\cup C)$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 5", isLatex: false, classes: "" }, { rawContent: "$(A \\cup B)'$ = $A' \\cap B'$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 6", isLatex: false, classes: "" }, { rawContent: "$(A \\cap B)'$ = $A' \\cup B'$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 7", isLatex: false, classes: "" }, { rawContent: "$A - B$ = $A \\cap B'$", isLatex: true, classes: "" }], [{ rawContent: "สูตรที่ 8", isLatex: false, classes: "" }, { rawContent: "$A' = U - A$", isLatex: true, classes: "" }]]], definition: [[{ rawContent: "$ \\cup $", isLatex: true, classes: "" }, { rawContent: "ยูเนียน", isLatex: false, classes: "" }], [{ rawContent: "$ \\cap$", isLatex: true, classes: "" }, { rawContent: "อินเตอร์เซกซัน", isLatex: false, classes: "" }], [{ rawContent: "$A'$", isLatex: true, classes: "" }, { rawContent: "คอมพลีเมนต์", isLatex: false, classes: "" }], [{ rawContent: "-", isLatex: true, classes: "" }, { rawContent: "ผลต่าง", isLatex: false, classes: "" }]], longContent: true}),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "สูตรเซต 2 วง", isLatex: false, classes: "" }, equation: { rawContent: "$n(A \\cup B)$ $=$ $n(A)$ $+$ $n(B)$ $-$ $n(A \\cap B)$", isLatex: true, classes: "" }, definition: [[{ rawContent: "$\\cup$", isLatex: true, classes: "" }, { rawContent: "ยูเนียน", isLatex: false, classes: "" }], [{ rawContent: "$\\cap$", isLatex: true, classes: "" }, { rawContent: "อินเตอร์เซกซัน", isLatex: false, classes: "" }]] }),

    ContentBoxCreator.fromObject({ references: [{ rawContent: "เซต", isLatex: false, classes: "" }, { rawContent: "การดำเนินการของเซต", isLatex: false, classes: "" }], title: { rawContent: "สูตรเซต 3 วง", isLatex: false, classes: "" }, equation:  new SpecialText("$n(A \\cup B \\cup C)$ $=$ $n(A)$ $+$ $n(B)$ $+$ $n(C)$ $-$ $n(A \\cap B)$ $-$ $n(A \\cap C)$ $-$ $n(B \\cap C)$ $+$ $n(A \\cap B \\cap C)$", true), definition: [[{ rawContent: "$\\cup$", isLatex: true, classes: "" }, { rawContent: "ยูเนียน", isLatex: false, classes: "" }], [{ rawContent: "$\\cap$", isLatex: true, classes: "" }, { rawContent: "อินเตอร์เซกซัน", isLatex: false, classes: "" }]], longContent: true})
]



