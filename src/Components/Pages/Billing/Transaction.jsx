import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data name ID status amount date
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'Oct 5, 2023',
    'Jenny Wilson',
    'Care Sponsor',
    'VISA ⠀•••• 3719',
    455.62,
  ),

  createData(
    1,
    'Sept 28, 2023',
    'Robert Wilson',
    'Care Giver',
    'VISA ⠀•••• 2574',
    92.78,
  ),

  createData(
    2,
    'Sept 20, 2023',
    'Robert Wilson',
    'Care Giver',
    'VISA ⠀•••• 2574',
    -50.83,
  ),

  createData(
    3,
    'Sept 12, 2023',
    'Jacob Wilson',
    'Care Sponsor',
    'AMEX ⠀•••• 2000',
    259.86,
  ),
];

export default function Transaction() {
  return (
    <React.Fragment>
      <Title>Transaction</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">
                <span
                  style={{
                    color: row.amount < 0 ? 'red' : 'green',
                    fontWeight: 'bold', // Add fontWeight to make text bold
                  }}
                >
                  {`$${row.amount}`}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
