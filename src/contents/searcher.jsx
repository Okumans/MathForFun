import { ContentBox, ContentBoxCreator, SpecialText } from "./contentBox";
import { sampleContents } from "./contents";
import fuzzysort from 'fuzzysort'


export class Searcher {
  constructor(rawContents) {
    this.rawContents = rawContents;
    this.content = this.getSearchableContent();
    this.mapContents = this.createMappingTable();
  }

  search(text) {
    const results = Object.entries(this.content).map(([content, values]) =>
      fuzzysort.go(text, values, { threshold: -10000 }).map((value) => {
        return {
          name: value.target,
          score: value.score,
          parent: {
            title: this.mapContents[content].title.rawContent,
            content: this.mapContents[content].content
          }
        }
      }))
    return results.flat(1).sort((value) => value.score)
  }

  createMappingTable() {
    return Object.fromEntries(this.rawContents.map((Content) => [Content.title.rawContent, Content]))
  }

  getSearchableContent() {
    return Object.fromEntries(this.rawContents.map((Content) => [Content.title.rawContent, [
      Content.title?.rawContent,
      Content.description?.rawContent,
      Content.equation?.rawContent,
      ...(Content.topics?.flat(Infinity) || []).map((content) => content.rawContent),
      ...(Content.table?.flat(Infinity) || []).map((content) => content.rawContent),
      ...(Content.definition?.flat(Infinity) || []).map((content) => content.rawContent),
    ]]));
  }


}