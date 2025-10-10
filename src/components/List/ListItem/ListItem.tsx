import styles from './ListItem.module.css';

export type ListItemT = {
  id: number;
  dataBefore: string;
  text: string;
  href?: string;
};

type ListItemProps = {
  item: ListItemT;
};

const ListItem = ({ item }: ListItemProps) => {
  const { dataBefore, text } = item;

  return (
    <li className={styles.listItem}>
      {item.href ? (
        <a href={item.href} target={'_blank'}>
          <span
            className={styles.listItemIcon}
            style={{ backgroundImage: `url(${dataBefore})` }}
          />
          <span className={styles.listItemText}>{text}</span>{' '}
        </a>
      ) : (
        <>
          <span
            className={styles.listItemIcon}
            style={{ backgroundImage: `url(${dataBefore})` }}
          />
          <span className={styles.listItemText}>{text}</span>{' '}
        </>
      )}
    </li>
  );
};

export default ListItem;
