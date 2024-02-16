import styles from './card.module.css'

const Card = ({ children }) => {
  return (
    <>
      <div className={styles.card__container}>{children}</div>
    </>
  )
}

export default Card
