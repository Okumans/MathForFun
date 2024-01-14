import { sampleContents } from "./pageContentTemplate/contents";
import { Searcher } from "../../searcher";
import { TopicBoxCreator } from "../../topicBox";
import { realNumberContent } from "./pageRealNumber/contents";
import { ContentBoxCreator } from "../../contentBox";

export const mergedContent = [
    ...sampleContents,
    ...realNumberContent
]

const searcher = new Searcher([...mergedContent]);
const tagTable = searcher.getTagTable();

export const createSearchContent = (contents) => {
    return contents.map(
        content => ContentBoxCreator.fromObject({...content.toObject(), defualtHeight: 0})
    )
}

export const topics = Object.entries(tagTable).map(([tag, contents]) => TopicBoxCreator.fromObject({
    references: [],
    description: "",
    title: tag,
    topics: contents.map((content) => content.title.rawContent),
}));


export const findByTitle = (title) => {
    return mergedContent.find((val) => val.title.rawContent == title);  
}