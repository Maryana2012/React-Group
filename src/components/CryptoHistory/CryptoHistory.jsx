import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns'

export const CryptoHistory = ({items}) => {
console.log(items);
return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {items.map(({id, price, amount, date}, index) => {
      return (<Tr key={id}>
      <Td>{index +1}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{format(new Date(date), 'Pp')}</Td>
    </Tr>)
    })}
  </tbody>
</BaseTable>
};
