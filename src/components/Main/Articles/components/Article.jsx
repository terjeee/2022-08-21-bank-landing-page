import css from './Article.module.css';

function Article(props) {
  const author = props.author;
  const title = props.title;
  const text = props.text;
  const image = props.image;
  const image_alt = props.image_alt;

  return (
    <article className={css.article}>
      <img src={image} alt={image_alt} />
      <div className={css.article__child}>
        <h5 className={css.author}>by {author}</h5>
        <h4 className={css.title}>{title}</h4>
        <p className={css.text}>{text}</p>
      </div>
    </article>
  );
}

export default Article;
