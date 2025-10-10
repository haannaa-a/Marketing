import styles from './SymbolsCount.module.css';

type SymbolsCountProps = { value: number; limit: number };

const SymbolsCount = ({ value, limit }: SymbolsCountProps) => {
  return (
    <span className={styles.messageCount}>
      <span className={`${value >= limit ? styles.errorCount : ''}`}>
        {value}
      </span>
      /{limit}
    </span>
  );
};

export default SymbolsCount;
