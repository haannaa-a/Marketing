import Header from '../Header/Header.tsx';
import Card from '../Card/Card.tsx';
import { StatisticsSectionConstant } from './StatisticsSection.constant.ts';
import styles from './StatisticsSection.module.css';
import { useEffect, useState } from 'react';

const METRICS_URL =
  'https://www.greatfrontend.com/api/projects/challenges/statistics-metrics';

interface Metric {
  metric: string;
  value: number;
}

interface MetricsResponse {
  data: Metric[];
}

const formatMetricLabel = (value: string): string => {
  const upperCaseFirstLetter = `${value[0].toUpperCase()}${value.slice(1)}`;
  const replacedString = upperCaseFirstLetter.replace('_', ' ');

  return replacedString;
};

const StatisticsSection = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchMetrics = async () => {
      try {
        setLoading(true);

        const res = await fetch(METRICS_URL, {
          signal: abortController.signal,
        });
        const { data }: MetricsResponse = await res.json();

        setMetrics(
          data.map((item: Metric) => ({
            ...item,
            metric: formatMetricLabel(item.metric),
          })),
        );
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          setError('Failed to load statistics');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();

    return () => abortController.abort();
  }, []);

  return (
    <Card>
      <Header
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
          {error && <p className={styles.error}>{error}</p>}

          {!loading && !error && (
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
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatisticsSection;
