import styles from './List.module.css';
import ListItem, { ListItemT } from './ListItem/ListItem';

type ListProps = {
  data: ListItemT[];
};

const List = ({ data }: ListProps) => {
  return (
    <ul className={styles.containerList}>
      {data.map((el) => (
        <ListItem key={el.id} el={el} />
      ))}
    </ul>
  );
};

export default List;
