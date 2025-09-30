import styles from './ListItem.module.css';

export type ListItemT = {
  id: number;
  dataBefore: string;
  text: string;
};

type ListItemProps = {
  item: ListItemT;
};

const ListItem = ({ item }: ListItemProps) => {
  const { dataBefore, text } = item;

  return (
    <li className={styles.listItem}>
      <span
        className={styles.listItemIcon}
        style={{ backgroundImage: `url(${dataBefore})` }}
      />
      <span className={styles.listItemText}>{text}</span>
    </li>
  );
};

export default ListItem;
