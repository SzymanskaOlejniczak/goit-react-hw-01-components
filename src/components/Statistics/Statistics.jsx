import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
export function Statistics ({title ='Upload stats', stats}){
    function randomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }
    return (
        <section className={styles.sectionStat}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
                <li
                className={styles.item}
                key={id}
                style={{ backgroundColor: randomHexColor() }}
                >
                <span className="label">{label}</span>
            <   span className="percentage">{percentage}%</span>
                </li>
        ))}
            </ul>
        </section>
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };