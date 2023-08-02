import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/OnwerSignUpContent/Content";

function SignUp() {
  useEffect(() => {
    document.title = "Sign Up | TenantCare";
  }, []);

  return (
    <div className="mt-16 bg-white">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default SignUp;
