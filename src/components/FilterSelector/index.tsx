import { Select } from '@mantine/core'
import React, { FC, useEffect, useState } from 'react'
import { useStyles } from './styles'

type Props = {
  options: { label: string; value: string }[];
  mainLabel: string;
  setFilterValues: (value: string | null, field: string) => void,
  name: string
};

const FilterSelector: FC<Props> = ({ options, mainLabel, setFilterValues, name }) => {
  const [selectValue, setValue] = useState<string | null>(options[0].value);
  const { classes } = useStyles();

  useEffect(() => {
    setFilterValues(selectValue, name)
  }, [selectValue, setFilterValues, name])

  return (
    <Select
      value={selectValue}
      onChange={setValue}
      defaultValue={options[0].value}
      placeholder={options[0].label}
      className={classes.root}
      label={mainLabel}
      data={options}
    />
  );
};

export default FilterSelector