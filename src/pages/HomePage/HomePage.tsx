import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';

const HomePage = (): React.JSX.Element => {
    const navigate = useNavigate();

    const onCreateBtnClick = async () => {
        const response = await axios.get('http://localhost:3000/create');
        const {
            data: { code },
        } = response;
        console.log({ code });
        const socket = io('http://localhost:3000');
        socket.emit('joinLobby', code);
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
