const columnsRender = (config) => {
    config.map(col=>(<th key={col.item}>{col.title}</th>))
  }

const rowsRender = (config,data)=>data.map((el, i) => (
    <tr key={i}>
      {config.map((c) => (
        <td key={c.title}>{!c.component ? 
            (el[c.field]):(<>{c.component({data:el[c.field]})}</>)}
        </td>
      ))}
    </tr>
  ))

  export {columnsRender, rowsRender}