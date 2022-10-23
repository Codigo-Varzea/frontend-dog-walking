import {
    Checkbox,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from "@material-ui/core";

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Data de Agendamento' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Pets' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Preço' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Duração' },
];

export default function EnhancedTableHead({
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
}) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ "aria-label": "select all desserts" }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
