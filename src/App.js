import UsersList from './components/users-list/UsersList';

const App = () => {
	return (
		<div className="container mx-auto">
			<h1
				className="font-bold text-center"
				style={{ color: 'blue', fontStyle: 'oblique' }}
			>
				Favsome Albums
			</h1>
			<UsersList />
		</div>
	);
};

export default App;
