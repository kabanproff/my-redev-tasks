import Item from './Item/Item';
import s from './Items.module.css';

const Items = () => {
	return (

		<ul className={s.ul}>
			<Item itemText={'Task 1'} />
			<Item itemText={'Task 2'} />
			<Item itemText={'Task 3'} />
			<Item itemText={'Task 4'} />
			<Item itemText={'Task 5'} />
			<Item itemText={'Task 6 LifeCycleAxios'} />
			<Item itemText={'Key'} />
			<Item itemText={'RequestGet'} />
			<Item itemText={'RequestPost'} />
			<Item itemText={'Routing'} />
		</ul>
	)
}

export default Items;