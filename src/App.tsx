import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query/client";
import { Routes } from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />;
    </QueryClientProvider>
  );
}

export default App;
