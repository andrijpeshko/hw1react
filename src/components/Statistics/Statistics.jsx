import PropTypes from 'prop-types';
import {
  StatSection,
  StatList,
  StatItem,
  StatLabel,
  StatPercents,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercents>{stat.percentage}%</StatPercents>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
