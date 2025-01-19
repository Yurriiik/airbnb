import './style.scss'

const CategoryItem = ({title, img}) => {
    return (
        <div className="categories__list-item">
            <img className="categories__item-img" src={img} alt="CatName" />
            <p className="categories__item-text">{title}</p>
        </div>
    );
}
 
export default CategoryItem;