import fuzzysort from 'fuzzysort'


// TODO: make search support searching content by > 1 key, more match score more.
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
    return results.flat(1).sort((value) => value.score).reverse();
  }

  createMappingTable(Contents=this.rawContents) {
    return Object.fromEntries(Contents.map((Content) => [Content.title.rawContent, Content]))
  }

  getSearchableContent(Contents=this.rawContents) {
    return Object.fromEntries(Contents.map((Content) => [Content.title.rawContent, [
      Content.title?.rawContent,
      Content.description?.rawContent,
      Content.equation?.rawContent,
      ...(Content.references?.flat(Infinity) || []).map((content) => content.rawContent),
      ...(Content.table?.flat(Infinity) || []).map((content) => content.rawContent),
      ...(Content.definition?.flat(Infinity) || []).map((content) => content.rawContent),
    ]]));
  }

  getTagTable(Contents=this.rawContents) {
    console.log(Contents)
    const tags = {};
    Contents.forEach(Content => {
      Content.references.map((ref) => {        
        tags[ref.rawContent] = tags[ref.rawContent] || [];
        tags[ref.rawContent].push(Content);
      })
    });
    return tags;
  }
}

