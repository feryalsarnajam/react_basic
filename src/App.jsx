import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Center, Flex, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const greeting = "Winc Recipe Checker";
  return (
    <>
      <Flex  flexDir='column' bg='blue.500'>
        {selectedRecipe ? (
          <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <>
            <Heading
              size='2xl'
              mb={8}
              marginTop={8}
              color='blue.50'
              align='center'
              justify='center'>
              {greeting}
            </Heading>
            <RecipeListPage clickFn={setSelectedRecipe} />
          </>
        )}
      </Flex>
    </>
  );
};
