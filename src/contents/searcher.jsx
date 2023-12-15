import { ContentBox, ContentBoxCreator, SpecialText } from "./contentBox";
import { sampleContents } from "./contents";
import fuzzysort from 'fuzzysort'


export class Searcher {
    constructor(rawContents){
        this.rawContents = rawContents;
        this.content = this.getSearchableContent();
    }

    search(text) {
        console.log(fuzzysort.go(text, this.content.flat(Infinity)))
    }

    getSearchableContent() {
        return this.rawContents.map((Content) => [
          Content.title?.rawContent,
          Content.description?.rawContent,
          Content.equation?.rawContent,
          ...(Content.topics?.flat(Infinity) || []).map((content) => content.rawContent),
          ...(Content.table?.flat(Infinity) || []).map((content) => content.rawContent),
          ...(Content.definition?.flat(Infinity) || []).map((content) => content.rawContent),
        ]);
      }

    
}