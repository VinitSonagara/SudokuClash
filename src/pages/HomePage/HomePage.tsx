import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';

const HomePage = (): React.JSX.Element => {
    const navigate = useNavigate();

    const onCreateBtnClick = async () => {
        const response = await axios.get('http://localhost:3000/create');
        console.log({ response });
        const socket = io('http://localhost:3000');
        socket.on('connection', () => {
            console.log('Connected to server:', socket.id);
        });
    };

    const onJoinBtnClick = () => {
        navigate('/join');
    };

    return (
        <>
            <button onClick={onCreateBtnClick}>Create Game</button>
            <button onClick={onJoinBtnClick}>Join Game</button>
        </>
    );
};

export default HomePage;
