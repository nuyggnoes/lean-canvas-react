import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';

function CanvasDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  console.log('searchParams: ', searchParams.get('keyword'));

  const location = useLocation();
  console.log('location: ', location);
  return (
    <div className="text-3xl">
      <CanvasTitle />
      <LeanCanvas />
    </div>
  );
}

export default CanvasDetail;
