import { Link } from "gatsby";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useFetchAllPostTitles } from "../graphql/useFetchAllPostTitles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PageStyles = styled.aside`
  display: flex;
  flex-direction: column;
  width: 22.5rem;
  align-items: center;
  flex-wrap: wrap;
  color: var(--black-base);
  background-color: var(--peach-base);
  text-align: center;

  .links {
    max-height: 100%;
    overflow-y: auto;

    @media (max-width: 700px) {
      max-height: 240px;
    }
  }

  @media (max-width: 800px) {
    width: 17.5rem;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    width: 100%;

    .search {
      margin: 0 auto;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    padding: 1rem 3rem;
    padding-top: 2rem;
    font-family: var(--logo-font);
    font-size: var(--size-subtitle);
  }

  & > * {
    width: 100%;
  }

  label {
    padding: 1rem 0;
  }

  input {
    width: 70%;
    border-radius: 5px;
    padding: 1rem 1rem;
    outline: none;
    border: none;
    background-color: var(--black-base);
    color: var(--peach-base);
    font-family: var(--header-font);
    font-size: var(--size-content);

    &::placeholder {
      color: var(--peach-base);
      font-family: var(--header-font);
      font-size: var(--size-content);
    }
  }

  a {
    color: inherit;
    border-bottom: 1px var(--peach-med-dark) solid;
    font-size: var(--size-content);
    padding: 1rem 3rem;
    width: 100%;
    font-family: var(--nav-font);
    transition: all 0.3s;

    &:first-child {
      border-top: 1px var(--peach-med-dark) solid;
    }

    &:hover {
      color: var(--peach-light);
      background-color: var(--peach-med-dark);
    }
  }
  .search {
    display: flex;
    flex-direction: row;
    background-color: var(--black-base);
    width: 80%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    svg {
      fill: var(--peach-base);
      margin: 0 1rem;
    }
  }

  .date {
    font-size: var(--size-base);
    padding-top: 0.5rem;
  }
`;

const PostsSidebar = () => {
  const [searchTerm, setSearchTerm] = useState<String>("");
  const [links, setLinks] = useState<String | Symbol[]>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const posts = useFetchAllPostTitles();
  const edges = posts.allPrismicPost.edges;
  useEffect(() => {
    let searchedEdges = edges;
    if (searchTerm) {
      searchedEdges = edges.filter((edge: any) =>
        edge.node.data.title.text
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    let links = searchedEdges.map((edge: any) => {
      return (
        <Link key={edge.node.uid} to={`/post/${edge.node.uid}`}>
          <div>{edge.node.data.title.text}</div>
          <div className="date">
            {dayjs(edge.node.first_publication_date).fromNow()}
          </div>
        </Link>
      );
    }) as Symbol[];
    setLinks(links);
  }, [searchTerm]);
  return (
    <PageStyles>
      <h2>Latest Posts</h2>
      <div className="search">
        <input
          onChange={(e) => handleChange(e)}
          id="search-field"
          type="text"
          placeholder="Search Posts"
        />
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 32 32"
        >
          <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>
      </div>
      <div className="links">{links}</div>
    </PageStyles>
  );
};

export default PostsSidebar;
