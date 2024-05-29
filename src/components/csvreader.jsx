import React, { useState } from 'react';
import Papa from 'papaparse';

const CsvReader = ({ firstArray, setFirstArray, secondArray, setSecondArray }) => {
  const [csvFile, setCsvFile] = useState();

  const processCSV = (str, delim = ',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');

    const newFirstArray = rows.map((row) => {
      const values = row.split(delim);
      return values[0];
    });

    const newSecondArray = rows.map((row) => {
      const values = row.split(delim);
      return values[1];
    });

    setFirstArray(newFirstArray);
    setSecondArray(newSecondArray);
  };

  const handleOnChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (csvFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        processCSV(text);
      };
      reader.readAsText(csvFile);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="file" accept=".csv" onChange={handleOnChange} />
      <button type="submit">Import CSV</button>
    </form>
  );
};

export default CsvReader;