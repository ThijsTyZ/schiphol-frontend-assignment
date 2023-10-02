import React from "react";
import "./ColorsTable.scss";

const colors = [
  /* Main colours */
  "schiphol-blue",
  "afternoon-blue",
  "seebuyfly-yellow",

  /* Secondary colours */
  "morning-pink",
  "lightmorning-pink",
  "lightmorning-blue",
  "dusk-green",
  "dusk-blue",
  "evening-pink",
  "evening-lilac",

  /* Greys */
  "black",
  "grey-storm",
  "grey-overcast",
  "grey-broken",
  "grey-scattered",
  "grey-few",
  "white",

  /* Signal colours */
  "dark-red",
  "green",
  "light-blue",
  "light-green",
  "light-yellow",

  /* Domain gradients */
  "gradient-flights",
  "gradient-parking",
  "gradient-at-schiphol",
  "gradient-more",
  "gradient-privium",
];

function ColorsTable() {
  return (
    <table className="ColorsTable">
      <caption>Colors</caption>
      <tbody>
        {colors?.map((color) => (
          <tr key={color}>
            <td>{color}</td>
            <td style={{ background: `var(--${color})` }}>&nbsp;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ColorsTable;
