import "./App.css";
import TeamsStats from "./components/TeamsStats";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="appTheme">
      <QueryClientProvider client={queryClient}>
        <TeamsStats />
      </QueryClientProvider>
    </div>
  );
}

export default App;
