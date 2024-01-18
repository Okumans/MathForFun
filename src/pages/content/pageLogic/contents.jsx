import { ContentBoxCreator } from "../../../contentBox";
import { SpecialText } from "../../../specialText";

export const LogicContent = [
    ContentBoxCreator.fromObject({
        references:[{rawContent:"ตรรกศาสตร์",isLatex:false,classes:""},{rawContent:"ประพจน์",isLatex:false,classes:""}],title:{rawContent:"ประพจน์",isLatex:false,classes:""},description:{rawContent:"ประโยคหรือข้อความที่เป็น \"จริง\" หรือ \"เท็จ\" อย่างใดอย่างหนึ่งเท่านั้น มักใช้สัญลักษณ์ $p$ $q$ และ $r$ แทนประพจน์",isLatex:true,classes:""}}),
    
    ContentBoxCreator.fromObject({
        references:[{rawContent:"ตรรกศาสตร์",isLatex:false,classes:""},{rawContent:"ประพจน์",isLatex:false,classes:""},{rawContent:"ตารางค่าความจริง",isLatex:false,classes:""}],title:{rawContent:"การเชื่อมประพจน์ และตารางค่าความจริง",isLatex:false,classes:""},table:[[{rawContent:"$p$",isLatex:true,classes:"w-full text-center"},{rawContent:"$q$",isLatex:true,classes:"w-full text-center"},{rawContent:"$\\sim p$",isLatex:true,classes:"w-full text-center"},{rawContent:"$p \\land q$",isLatex:true,classes:"w-full text-center"},{rawContent:"$p \\lor q$",isLatex:true,classes:"w-full text-center"},{rawContent:"$p \\rightarrow q$",isLatex:true,classes:"w-full text-center"},{rawContent:"$p \\leftrightarrow q$",isLatex:true,classes:"w-full text-center"}],[[{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"}],[{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"}],[{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"}],[{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$F$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"},{rawContent:"$T$",isLatex:true,classes:"w-full text-center"}]]],definition:[[{rawContent:"$\\land$",isLatex:true,classes:""},{rawContent:"และ",isLatex:false,classes:""}],[{rawContent:"$\\lor$",isLatex:true,classes:""},{rawContent:"หรือ",isLatex:false,classes:""}],[{rawContent:"$\\rightarrow$",isLatex:true,classes:""},{rawContent:"ถ้า...แล้ว....",isLatex:false,classes:""}],[{rawContent:"$\\leftrightarrow$",isLatex:true,classes:""},{rawContent:"ก็ต่อเมื่อ",isLatex:false,classes:""}],[{rawContent:"$\\sim$",isLatex:true,classes:""},{rawContent:"นิเสธ",isLatex:false,classes:""}]]}),
    
    ContentBoxCreator.fromObject({
        references:[{rawContent:"ตรรกศาสตร์",isLatex:false,classes:""},{rawContent:"การดำเนินการทางตรรกศาสตร์",isLatex:false,classes:""}],title:{rawContent:"การดำเนินการทางตรรกศาสตร์",isLatex:false,classes:""},keywords:[{rawContent:"สมบัติตรรกศาสตร์",isLatex:false,classes:""},{rawContent:"สมมูล",isLatex:false,classes:""},{rawContent:"นิเสธ",isLatex:false,classes:""}],definition:[[{rawContent:"$\\equiv$",isLatex:true,classes:""},{rawContent:"สมมูล",isLatex:false,classes:""}]],equation:{rawContent:"$\\sim ( \\sim p) \\equiv p$",isLatex:true,classes:""}}),
]