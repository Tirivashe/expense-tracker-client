import { Group, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { Category } from "../../components"
import { useGetCategorySummaryQuery } from '../../redux/api/transaction'

type Props = {}


const CategoriesSummary: FC<Props> = () => {
  const { data: categorySummary } = useGetCategorySummaryQuery()

  
  if(categorySummary) return (
    <Stack mt={35}>
      <Text sx={(theme) => ({ fontSize: theme.fontSizes.xl })}>
        Categories Last 30 Days
      </Text>
      <Group position="left" spacing="sm" grow sx={{ width: "90%" }}>
        {categorySummary.map((category) => (
          <Category key={category.category} category={category} />
        ))}
      </Group>
    </Stack>
  );

  return null
}

export default CategoriesSummary