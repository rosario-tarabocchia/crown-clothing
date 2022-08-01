import "./category-directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="directories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  ); 
};

export default CategoryDirectory;
