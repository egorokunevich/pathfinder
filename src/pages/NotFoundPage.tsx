import Button from '@/src/components/Button';
import { useNavigate } from 'react-router-dom';
import home from '@/src/assets/icons/home.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-red-500 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-white text-7xl">404</div>
        <h2 className="text-white text-4xl">Not Found</h2>
      </div>
      <Button
        onClick={() => navigate('/')}
        className=" rounded-full border-white bg-transparent group hover:bg-red-600"
      >
        <img
          src={home}
          alt="home"
          className="group-hover:scale-105 duration-200 "
        />
      </Button>
    </div>
  );
};

export default NotFoundPage;
