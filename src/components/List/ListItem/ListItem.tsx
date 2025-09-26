import styles from './ListItem.module.css';

export type ListItemT = {
  id: number;
  dataBefore: string;
  text: string;
};

type ListItemProps = {
  el: ListItemT;
};

const ListItem = ({ el }: ListItemProps) => {
  const { dataBefore, text } = el;

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
