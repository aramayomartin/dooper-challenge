import { MainContextProvider } from "context/MainContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
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

export default Providers;
