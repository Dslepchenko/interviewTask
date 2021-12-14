import React from "react";
import {columnsRender, rowsRender} from "./utils/helpers";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      {columnsRender(config)}
    </thead>
    <tbody>
      {rowsRender(config,data)}
    </tbody>
  </table>
);

export default Grid;