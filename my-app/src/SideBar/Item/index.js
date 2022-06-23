import "../Item/index.css";
function Item() {
  return (
    <div className="item-container">
      <div className="child_item">
        <span>Home</span>
      </div>
      <div className="child_item">
        <span>Service</span>
      </div>
      <div className="child_item">
        <span>News</span>
      </div>
      <div className="child_item">
        <span>Blog</span>
      </div>
      <div className="child_item">
        <span>Contact</span>
      </div>
    </div>
  );
}

export default Item;
