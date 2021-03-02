import TableContextProvider from '../../context/TableContext';
import Tables from '../../components/Tables/Tables';
import './WaiterPage.scss';

const WaiterPage = () => {
  return (
    <TableContextProvider>
      <Tables />
    </TableContextProvider>
  );
};

export default WaiterPage;
