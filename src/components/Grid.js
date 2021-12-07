import { useFetch } from '../hooks/useFetch';

import { GridItem } from './GridItem';

export const Grid = ({ category }) => {
const {imgs, loading} = useFetch(category);
  return (
    <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className='ui link cards'>
            {imgs.map(img => <GridItem key={img.id} {...img} />)}
        </div>
    </>
  );
};
