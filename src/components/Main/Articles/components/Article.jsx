import { useNavigate, useParams } from "react-router-dom";

import css from "./Article.module.css";

function Article(props) {
  const navigate = useNavigate();
  // const {articleId} = useParams()

  // const id = props.id;
  const author = props.author;
  const title = props.title;
  const story = props.text;
  const image = props.image;
  const image_alt = props.image_alt;

  const handleNavigate = () => {
    // NAVIGATE TO ARTICLE-ID?
    navigate(`/articles`);
  };

  return (
    <article className={css.article} onClick={handleNavigate}>
      <img src={image} alt={image_alt} />
      <div className={css.text}>
        <h5 className={css.author}>by {author}</h5>
        <h4 className={css.title}>{title}</h4>
        <p className={css.story}>{story}</p>
      </div>
    </article>
  );
}

export default Article;
