import { StatisticsSectionConstant } from './StatisticsSection.constant.ts';
import styles from './StatisticsSection.module.css';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';
import { toUpperCaseFirstLetter } from '../../utils/toUpperCaseFirstLetter.ts';
import { formatLabel } from '../../utils/formatLabel.ts';
import { useApi } from '../../hooks/useApi.ts';

const METRICS_URL =
  'https://www.greatfrontend.com/api/projects/challenges/statistics-metrics';

interface Metric {
  metric: string;
  value: number;
}

const StatisticsSection = () => {
  const { data, loading, error } = useApi<{ data: Metric[] }>({
    url: METRICS_URL,
  });
  const metrics = (data?.data ?? []).map((item: Metric) => ({
    ...item,
    metric: formatLabel(toUpperCaseFirstLetter(item.metric)),
  }));

  return (
    <ContentWrapper>
      <ContentHeader
        subTitle={StatisticsSectionConstant.header.subTitle}
        title={StatisticsSectionConstant.header.title}
        text={StatisticsSectionConstant.header.text}
      />
      <div className={styles.containerContent}>
        <div className={styles.containerImg}>
          <img
            src={StatisticsSectionConstant.content.img.src}
            alt={StatisticsSectionConstant.content.img.alt}
          />
        </div>
        <div className={styles.containerTextPart}>
          <h2 className={styles.contentHeading}>
            {StatisticsSectionConstant.content.title}
          </h2>

          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}

          <ul className={styles.containerList}>
            {metrics.map((item) => (
              <li
                className={styles.containerListItem}
                key={`${item.metric}${item.value}`}
              >
                <h3 className={styles.listItemHeading}>{item.value}</h3>
                <p className={styles.listItemText}>{item.metric}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default StatisticsSection;
