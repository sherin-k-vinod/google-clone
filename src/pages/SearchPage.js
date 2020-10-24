import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import {
  Description,
  ImageOutlined,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";

function SearchPage() {
  const [{ term }] = useStateValue();
  // Actual API call is this
  const { data } = useGoogleSearch(term);
  // Test API result for debugging
  //   const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButton />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <Description />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageOutlined />
                <Link to="/all">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/all">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <Room />
                <Link to="/all">Map</Link>
              </div>

              <div className="searchPage__option">
                <MoreVert />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__reasults">
          <p className="searchPage__reasulCount">
            About {data?.searchInformation.formattedTotalResults} resulsts (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage__resultsTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultsSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
