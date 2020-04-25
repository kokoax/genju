import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, henge, price) {
  return { name, henge, price }
}

const rows = [
  createData("転生する者", "転生の鍵", 10000),
  createData("猫", "思い出の切れ端", 4000),
];

const headCells = [
  { id: "name", align: "left", label: "幻獣名"},
  { id: "henge", align: "right", label: "変化アイテム" },
  { id: "price", align: "right", label: "値段" },
];

const GenjuTable = () => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {headCells.map((cell) => (
            <TableCell id={cell.id} align={cell.align}>{cell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.henge}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default (GenjuTable);
