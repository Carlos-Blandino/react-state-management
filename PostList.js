import React from "react";
import DeleteButton from "./DeleteButton";
/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({ posts, setPosts }) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const handleDeleteClick = (event) => {
    let parentId = event.target.parentNode.parentNode.parentNode.getAttribute(
      "data-id"
    );
    const newPosts = posts.filter((post, index) => {
      if (index != parentId) return post;
    });
    setPosts(newPosts);
  };
  return (
    posts.length > 0 && (
      <div className="post-list">
        {posts.map((post, index) => {
          if (post.includes("http")) {
            return (
              <div data-id={index}>
                <fieldset className="post">
                  <img src={post} />
                  <br />
                  <DeleteButton handleDeleteClick={handleDeleteClick} />
                </fieldset>
              </div>
            );
          } else
            return (
              <div data-id={index}>
                <fieldset className="post">
                  <p>{post}</p>
                  <br />
                  <DeleteButton handleDeleteClick={handleDeleteClick} />
                </fieldset>
              </div>
            );
        })}
      </div>
    )
  );
}

export default PostList;
