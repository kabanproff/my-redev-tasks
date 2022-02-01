import Item from './Item/Item';
import s from './Items.module.css';

const Items = () => {
	return (
		<ul className={s.ul}>
			<Item itemText={'Task 1'} className={s.active} />
			<Item itemText={'Task 2'} />
		</ul>
	)
}

export default Items;