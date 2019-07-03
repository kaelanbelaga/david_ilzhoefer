import * as React from "react";

const taglistStyle = {
  
  // position: "-webkit-sticky",
  // position: "sticky",
}

function TagList({ showTags, tags, currentTag, setTag }) {
  if (!showTags) {
    return null;
  }

  const onClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    setTag(tag);
  };

  return (
    <div className="nav general-sticky sidebar" >
      <div className="nav d-none d-lg-block">
        <ul className="nav nav-pills flex-column align-middle bg-nav">
          <li
            role="presentation"
            className={!currentTag ? "active nav-item" : "nav-item"}
          >
            <a className="nav-link" onClick={e => onClick(e, "")} href="#">
              All
            </a>
          </li>
          {tags.map(tag => (
            <li
              role="presentation"
              key={tag}
              className={currentTag === tag ? "active nav-item" : "nav-item"}
            >
              <a className="nav-link" onClick={e => onClick(e, tag)} href="#">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <select
        onChange={e => setTag(e.target.value)}
        value={currentTag}
        className="d-lg-none d-block m-auto select"
      >
        <option value="">All</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagList;
