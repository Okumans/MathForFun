import { ContentBoxCreator } from "../../../contentBox";
import { SpecialText } from "../../../specialText";

export const ProbabilityContent = [
    ContentBoxCreator.fromObject({
        references:[{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"หลักการบวก",isLatex:false,classes:""}],title:{rawContent:"หลักการบวก",isLatex:false,classes:""},description:{rawContent:"ใช้เมื่อเหตุการณ์ที่ทำสามารถเกิดขึ้นได้หลายวิธี แต่เหตุการณ์แต่ละคู่ไม่สามารถเกิดขึ้นได้พร้อมกัน",isLatex:true,classes:""},equation:{rawContent:"$n_1 + n_2 + n_3 + ... + n_k$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนวิธี",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({
        references:[{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"หลักการคูณ",isLatex:false,classes:""}],title:{rawContent:"หลักการคูณ",isLatex:false,classes:""},description:{rawContent:"ใช้เมื่อเหตุการณ์ที่ทำสามารถเกิดขึ้นได้หลายวิธี และเป็นเหตุการณ์ต่อเนื่องกัน",isLatex:true,classes:""},equation:{rawContent:"$n_1 \\cdot n_2 \\cdot n_3 \\cdot ... \\cdot n_k$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนวิธี",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({references:[{
        rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"การเรียงสับเปลี่ยนเชิงเส้น",isLatex:false,classes:""},{rawContent:"สิ่งของแตกต่างกันทั้งหมด",isLatex:false,classes:""}],title:{rawContent:"เรียงของที่แตกต่างกันทั้งหมด",isLatex:false,classes:""},equation:{rawContent:"$n!$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนวิธี",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({references:[{
        rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"การเรียงสับเปลี่ยนเชิงเส้น",isLatex:false,classes:""},{rawContent:"สิ่งของแตกต่างกันทั้งหมด",isLatex:false,classes:""}],title:{rawContent:"เลือกเรียงของที่แตกต่างกันทั้งหมด",isLatex:false,classes:""},equation:{rawContent:"$P_{n,r} = \\frac{n!}{(n-r)!}$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนของ",isLatex:false,classes:""}],[{rawContent:"$r$",isLatex:true,classes:""},{rawContent:"จำวนวนที่นำมาเรียง",isLatex:false,classes:""}]]}),
    
    ContentBoxCreator.fromObject({
        references:[{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"การเรียงสับเปลี่ยนเชิงเส้น",isLatex:false,classes:""},{rawContent:"สิ่งของไม่แตกต่างกันทั้งหมด",isLatex:false,classes:""}],title:{rawContent:"เรียงของที่ไม่แตกต่างกันทั้งหมด",isLatex:false,classes:""},equation:{rawContent:"$\\frac{n!}{n_1!+n_2!+n_3!+...+n_k!}$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนของ",isLatex:false,classes:""}],[{rawContent:"$n_k$",isLatex:true,classes:""},{rawContent:"จำนวนของที่ซ้ำ",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({
        references:[{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"การเรียงสับเปลี่ยนเชิงวงกลม",isLatex:false,classes:""}],title:{rawContent:"การเรียงสับเปลี่ยนเชิงวงกลม",isLatex:false,classes:""},equation:{rawContent:"$(n-1)!$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนของ",isLatex:false,classes:""}]]}),
        
    ContentBoxCreator.fromObject({references:[{
        rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"การจัดหมู่",isLatex:false,classes:""},{rawContent:"สิ่งของที่แตกต่างกันทั้งหมด",isLatex:false,classes:""}],title:{rawContent:"การจัดหมู่ของสิ่งของที่แตกต่างกันทั้งหมด",isLatex:false,classes:""},equation:{rawContent:"$C_{n,r}$ = $\\binom{n}{r}$ = $\\frac{n!}{(n-r)! \\cdot r!}$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนของ",isLatex:false,classes:""}],[{rawContent:"$r$",isLatex:true,classes:""},{rawContent:"จำนวนที่เลือกมาจัดกลุุ่ม",isLatex:false,classes:""}]]}),
    
    ContentBoxCreator.fromObject({
        references:[{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"ทฤษฎีบททวินาม",isLatex:false,classes:""}],title:{rawContent:"ทฤษฎีบททวินาม",isLatex:false,classes:""},equation:{rawContent:"$(x,y)^n $ = $\\binom{n}{0} x^n$ + $\\binom{n}{1} x^{n-1}y$ + $\\binom{n}{2} x^{n-2}y^2$ + ... + $\\binom{n}{n} y^n$ ",isLatex:true,classes:""},definition:[[{rawContent:"$x,y$",isLatex:true,classes:""},{rawContent:"จำนวนจริง",isLatex:false,classes:""}],[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนเต็มบวก",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({
        references:[{rawContent:"ความน่าจะเป็น",isLatex:false,classes:""}],title:{rawContent:"ความน่าจะเป็น",isLatex:false,classes:""},equation:{rawContent:"$P(E)$ = $\\frac{n(E)}{n(S)}$",isLatex:true,classes:""},definition:[[{rawContent:"$ n(E)$",isLatex:true,classes:""},{rawContent:"จำนวนสมาชิกของเหตุการณ์",isLatex:false,classes:""}],[{rawContent:"$n(S)$",isLatex:true,classes:""},{rawContent:"จำนวนสมาชิกของเหตุการณ์ทั้งหมด",isLatex:false,classes:""}]]}),
    
    ]