import React from 'react';

const TagsComponent = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div>
        <a key={index} href={tag.href} className="tag">{tag.title}</a>
        </div>
      ))}
    </div>
  );
}

export default TagsComponent;
