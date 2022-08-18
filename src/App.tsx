import { Center, Container, Grid, SimpleGrid, Text, Title } from "@mantine/core";
import Graph from "./components/Graph";

function App() {
  return (
    <div style={{ padding: "2rem 0", textAlign: "center" }}>
      <Container
        mx={"auto"}
        sx={(theme) => ({ maxWidth: "80%", color: theme.colors.gray[9] })}
      >
        <Title
          py="xl"
          mb="sm"
          order={3}
          sx={theme => ({ color: "white", background: theme.colors.cyan[9] })}
        >
          Expense Tracker
        </Title>
        <SimpleGrid breakpoints={[{ maxWidth: "md", cols: 2, spacing: "sm" }]}>
          <Graph />
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default App;
