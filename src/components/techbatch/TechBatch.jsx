import styles from './techBatch.module.css'

const TechBatch = ({tech}) => {
  return (
    <span className={styles.batch}>
      {tech}
    </span>
  )
}

export default TechBatch
