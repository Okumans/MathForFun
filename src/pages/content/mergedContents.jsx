import { sampleContents } from "./pageContentTemplate/contents";
import { Searcher } from "../../searcher";
import { TopicBoxCreator } from "../../topicBox";
import { realNumberContent } from "./pageRealNumber/contents";

const searcher = new Searcher([...sampleContents]);
const tagTable = searcher.getTagTable();

export const topics = Object.entries(tagTable).map(([tag, contents]) => TopicBoxCreator.fromObject({
    references: [],
    description: "",
    title: tag,
    topics: contents.map((content) => content.title.rawContent),
}));

export const mergedContent = [
    ...sampleContents,
    ...realNumberContent
];


export const findByTitle = (title) => {
    return mergedContent.find((val) => val.title.rawContent == title);  
}