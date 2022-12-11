import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`

  table-layout: auto;
  border: 2px solid silver;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 1);
  width: 600px;
  margin: 50px auto;
  padding: 5px;
  background-color: beige;
`;
export const Thead = styled.thead`
  background-color: rgb(21, 132, 25);
`;
export const TrColumn = styled.tr`
  :nth-of-type(even) {
    background-color: rgb(164, 205, 152);
  }
`;
export const TdString = styled.td`
  border: 2px solid silver;
`;