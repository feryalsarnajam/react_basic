import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Container, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const greeting = "Winc Recipe Checker";
  return (
    <>
      <Container maxW='full' maxH='fit-content' bg='blue.400'>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <>
            <Heading
              size='xl'
              mb={8}
        
              color='blue.50'
              align='center'
              justify='center'>
              {greeting}
            </Heading>

            <RecipeListPage clickFn={setSelectedRecipe} />
          </>
        )}
      </Container>
    </>
  );
};
