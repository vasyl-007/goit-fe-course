import React, { Component } from "react";
import * as articleAPI from "../services/articles-api";
import ArticleList from "../components/ArticleList";

export default class ArticlesPage extends Component {
  state = { items: [] };

  componentDidMount() {
    articleAPI.fetchArticles().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <h1>Articles page</h1>
        <ArticleList items={items} />
        <h3>
          Since 2014, the Sonoma and Mendocino coast has lost 90% of its bull
          kelp forest due to climate change. Interestingly, the solution to the
          crisis may involve eating purple sea urchin. Share on Facebook Share
          on Twitter
        </h3>
        <img
          width={600}
          src="https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/86/55/p086559s.jpg"
        />
        <p>
          One of the earliest causalities are abalone, whose primary diets are
          bull kelp. Until recently, scores of recreational abalone divers
          convened during the summer in Mendocino, until the catastrophic
          die-off of these large sea snails prompted Fish and Wildlife to cancel
          abalone harvesting until at least 2021. More sinister is the rapid
          expansion of the purple sea urchin, which also feeds on bull kelp but
          can adapt to starvation conditions and has formed ravenous feeding
          fronts, or urchin barrens. Laura Rogers-Bennett, a scientist with
          California Department of Fish and Wildlife (CDFW), is working on the
          issue. “The scale of these urchin barrens is staggering,” she said.
          “On the North Coast, we currently have 250km of sea urchins, who not
          only survive in starvation conditions but also reproduce.”
        </p>
      </>
    );
  }
}
