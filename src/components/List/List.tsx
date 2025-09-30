import styles from './List.module.css';
import ListItem, { ListItemT } from './ListItem/ListItem';

type ListProps = {
  listDataArray: ListItemT[];
};

const List = ({ listDataArray }: ListProps) => {
  return (
    <ul className={styles.containerList}>
      {listDataArray.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
