import { MainContextProvider } from "context/MainContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TestProvidersProps {
  children: ReactNode;
}

const TestProviders = ({ children }: TestProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        {children}
        <ToastContainer/>
      </MainContextProvider>
    </QueryClientProvider>
  );
};

export default TestProviders;
