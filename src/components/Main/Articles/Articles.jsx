import Article from './components/Article';

import imgA1 from '../../../assets/images/image-currency.jpg';
import imgA2 from '../../../assets/images/image-restaurant.jpg';
import imgA3 from '../../../assets/images/image-plane.jpg';
import imgA4 from '../../../assets/images/image-confetti.jpg';

import css from './Articles.module.css';

const DUMMY_DATA = {
  a1: {
    author: 'Claire Robinson',
    title: 'Receive money in any currency',
    text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    image: imgA1,
    image_alt: 'image-currency',
  },
  a2: {
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
    image: imgA2,
    image_alt: 'image-restaurant',
  },
  a3: {
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    image: imgA3,
    image_alt: 'image-plane',
  },
  a4: {
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    text: "After a lot of hard work by the whole team, we're excited to launch our closed    beta. It's easy to request an invite through the site ...",
    image: imgA4,
    image_alt: 'image-confetti',
  },
};

function Articles() {
  return (
    <section className={css.articles}>
      <h3>Latest Articles</h3>
      {Object.values(DUMMY_DATA).map((article, index) => (
        <Article
          key={index}
          author={article.author}
          title={article.title}
          text={article.text}
          image={article.image}
          image_alt={article.image_alt}
        />
      ))}
    </section>
  );
}

export default Articles;
