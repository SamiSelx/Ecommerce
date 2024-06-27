"use client";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import useAuth from "@/hooks/useAuth";
import Loading from "./loading";
export default function App({ children }) {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
