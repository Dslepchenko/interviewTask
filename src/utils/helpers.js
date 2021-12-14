const columnsRender = (config) => {
    return (
    <tr>
        {config.map(col=> (<th key={col.title}>{col.title}</th>))}
    </tr>)
  }

const rowsRender = (config,data)=> data.map((row, i) => (
    <tr key={i}>
        {config.map((c) => (
            <td key={c.title}>
                {!c.component ? row[c.field] : c.component({data: row[c.field]})}
            </td>
        ))}
    </tr>
  ))

  export {columnsRender, rowsRender}