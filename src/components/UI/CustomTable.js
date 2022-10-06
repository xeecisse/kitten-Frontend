import React from "react";
import { Table } from "reactstrap";
import { checkStrEmpty } from "../../utils/index";

function CustomTable(props) {
    const { fields = [], data = [], className = "", styles = {} } = props;
    return (
        <Table className={`${className}`} {...props} striped responsive hover borderless>
            <thead>
                <tr>
                    {fields.map((_item, _idx) => (
                        <th key={_idx} className="text-center">
                            {_item.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <tr key={idx} style={styles} >
                        {fields.map((_item, _idx) => {
                            let val = item[_item.value] || "";
                            let value_alt =
                                (_item.value_alt && item[_item.value_alt]) ||
                                "";
                            if (_item.component) {
                                return (
                                    <td key={_idx} className={_item.className}>
                                        {_item.component(item, idx)}
                                    </td>
                                );
                            } else {
                                return (
                                    <td key={_idx} className={_item.className}>
                                        {checkStrEmpty(val) ? value_alt : val}
                                    </td>
                                );
                            }
                        })}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default CustomTable;
