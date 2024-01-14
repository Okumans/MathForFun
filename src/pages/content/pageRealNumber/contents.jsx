import { ContentBoxCreator } from "../../../contentBox"
import { SpecialText } from "../../../specialText"

export const realNumberContent = [
    
    ContentBoxCreator.fromObject({
    references:["จำนวนจริง", {rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติปิด",isLatex:false,classes:""},equation:{rawContent:"\\[ a, b \\in \\mathbb{R} \\implies a + b \\in \\mathbb{R} \\]",isLatex:true,classes:""}
}),ContentBoxCreator.fromObject({
    references:["จำนวนจริง", {rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติการสลับที่",isLatex:false,classes:""},equation:{rawContent:"\\[ a * b = b * a \\]",isLatex:true,classes:""}
}),ContentBoxCreator.fromObject({
    references:["จำนวนจริง", {rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติการเปลี่ยนกลุ่ม",isLatex:false,classes:""},equation:{rawContent:"\\[ (a * b) * c = a * (b * c) \\]",isLatex:true,classes:""}
}),ContentBoxCreator.fromObject({
    references:["จำนวนจริง", {rawContent:"สมบัติของจำนวนจริง",isLatex:false,classes:""}],title:{rawContent:"สมบัติการมีเอกลักษณ์",isLatex:false,classes:""},equation:{rawContent:"$\\exists I\\forall x[x*I= x=I*x]$",isLatex:true,classes:""},definition:[[{rawContent:"I",isLatex:false,classes:""},{rawContent:"เอกลักษณ์",isLatex:false,classes:""}]]
}),new ContentBoxCreator(
    ["จำนวนจริง"],
    "จำนวนตรรกยะ",
    "จำนวนที่สามารถเขียนได้ในรูปเศษส่วนของจำนวนเต็ม หรือเขียนเป็นทศนิยมซ้ำได้",
    SpecialText.fromString("จำนวนสามารถที่เขียนในรูป $\\frac{a}{b}$", true),
    undefined,
    [[SpecialText.fromString("$a$", true), "จำนวนเต็ม"],
    [SpecialText.fromString("$b$", true), { rawContent: "จำนวนเต็มและ $b \\neq 0$", isLatex: true }]],
    undefined,
    undefined,
    ["เศษส่วน", "rational number"],
  ),
  new ContentBoxCreator(
    ["จำนวนจริง"],
    "จำนวนอตรรกยะ",
    "จำนวนที่เป็นทศนิยมแบบไม่ซ้ำ ซึ่งจำนวนชนิดนี้ไม่สามารถเขียนเป็นเศษส่วนของจำนวนเต็มได้",
    SpecialText.fromString("จำนวนที่ไม่สามารถที่เขียนในรูป $\\frac{a}{b}$", true),
    undefined,
    [[SpecialText.fromString("$a$", true), "จำนวนเต็ม"],
    [SpecialText.fromString("$b$", true), { rawContent: "จำนวนเต็มและ $b \\neq 0$", isLatex: true }]],
    undefined,
    undefined,
    ["irrational number"],
  )

]