import DataSource from "../data/data-source.js"
import "../component/search-bar.js"
import clubs from "../data/clubs.js"

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

  //   const onButtonSearchClicked = () => {
  //       DataSource.searchClub(searchElement.value)
  //       .then(renderResult)
  //       .catch(fallbackResult);
  // }; atau

    const onButtonSearchClicked = async () =>{
      const result = await DataSource.searchClub(searchElement.value)
      try {
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    }

    const renderResult = results => {
        clubListElement.clubs = result;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message)
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
