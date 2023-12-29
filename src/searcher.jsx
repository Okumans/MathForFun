import fuzzysort from 'fuzzysort'

export class Searcher {
  constructor(rawContents) {
    this.rawContents = rawContents;
    this.content = this.getSearchableContent();
    this.mapContents = this.createMappingTable();

  }

  search(text) {
    console.log(this.content)
    const results = Object.entries(this.content)
      .map(([title, keys]) => [
        title,
        Object.entries(keys)
          .map(([_, { contents, weight }]) =>
            fuzzysort.go(text, contents)
              .map((value) => ({
                name: value.target,
                score: (10000 + value.score) * weight,
              }))
          )
          .filter(elm => elm.length !== 0)
          .flat(2)
      ])
      .map(([key, results]) => [
        key,
        results.map((result) => result.score)
          .reduce((a, b) => a + b, 0)
      ])
      .filter(([_, score]) => score > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([title, _]) => ({
        title: title,
        content: this.mapContents[title].content
      }));

    return results
  }

  createMappingTable(Contents = this.rawContents) {
    return Object.fromEntries(Contents.map((Content) => [Content.title.rawContent, Content]))
  }

  getSearchableContent(Contents = this.rawContents) {
    return Object.fromEntries(Contents.map((Content) => [Content.title.rawContent, {
      title: {
        contents: [Content.title?.rawContent],
        weight: 2
      },
      description: {
        contents: [Content.description?.rawContent],
        weight: 0.7
      },
      equation: {
        contents: [Content.equation?.rawContent],
        weight: 0.9
      },
      keywords: {
        contents: Content.keywords || [],
        weight: 1
      },
      references: {
        contents: [...(Content.references?.flat(Infinity) || []).map((content) => content.rawContent)],
        weight: 0.5
      },
      table: {
        contents: [...(Content.table?.flat(Infinity) || []).map((content) => content.rawContent)],
        weight: 0.8
      },
      definition: {
        contents: [...(Content.definition?.flat(Infinity) || []).map((content) => content.rawContent)],
        weight: 0.8
      },
    }]));
  }

  getTagTable(Contents = this.rawContents) {
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

