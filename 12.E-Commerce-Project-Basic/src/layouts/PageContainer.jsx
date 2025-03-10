import { Container } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Container maxWidth="lg"  className="mt-12">
        {children}
    </Container>
  );
};

export default PageContainer;
