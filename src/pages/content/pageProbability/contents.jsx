import { ContentBoxCreator } from "../../../contentBox";
import { SpecialText } from "../../../specialText";

export const ProbabilityContent = [
    ContentBoxCreator.fromObject({
        references:[{rawContent:"ความน่าจะเป็น",isLatex:false,classes:""},{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"หลักการบวก",isLatex:false,classes:""}],title:{rawContent:"หลักการบวก",isLatex:false,classes:""},description:{rawContent:"ใช้เมื่อเหตุการณ์ที่ทำสามารถเกิดขึ้นได้หลายวิธี แต่เหตุการณ์แต่ละคู่ไม่สามารถเกิดขึ้นได้พร้อมกัน",isLatex:true,classes:""},equation:{rawContent:"$n_1 + n_2 + n_3 + ... + n_k$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนวิธี",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({
        references:[{rawContent:"ความน่าจะเป็น",isLatex:false,classes:""},{rawContent:"หลักการนับเบื้องต้น",isLatex:false,classes:""},{rawContent:"หลักการคูณ",isLatex:false,classes:""}],title:{rawContent:"หลักการคูณ",isLatex:false,classes:""},description:{rawContent:"ใช้เมื่อเหตุการณ์ที่ทำสามารถเกิดขึ้นได้หลายวิธี และเป็นเหตุการณ์ต่อเนื่องกัน",isLatex:true,classes:""},equation:{rawContent:"$n_1 \\cdot n_2 \\cdot n_3 \\cdot ... \\cdot n_k$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนวิธี",isLatex:false,classes:""}]]}),

    ContentBoxCreator.fromObject({references:[{
        rawContent:"ความน่าจะเป็น",isLatex:false,classes:""},{rawContent:"การเรียงสับเปลี่ยนเชิงเส้น",isLatex:false,classes:""},{rawContent:"สิ่งของแตกต่างกันทั้งหมด",isLatex:false,classes:""}],title:{rawContent:"เรียงของที่แตกต่างกันทั้งหมด",isLatex:false,classes:""},equation:{rawContent:"$n!$",isLatex:true,classes:""},definition:[[{rawContent:"$n$",isLatex:true,classes:""},{rawContent:"จำนวนวิธี",isLatex:false,classes:""}]]}),


    ]