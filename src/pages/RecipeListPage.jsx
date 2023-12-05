import {
  Heading,
  Card,
  CardBody,
  Image,
  HStack,
  Stack,
  Text,
  Box,
  SimpleGrid,
  CardHeader,
  Input,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((item) => {
    return (
      item.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      item.recipe.healthLabels.some(
        (i) => i.toLowerCase() === searchField.toLowerCase()
      )
    );
  });

  return (
    <>
      <Input
        onChange={handleChange}
        backgroundColor='white'
        width='40%'
        placeholder='Search recipes'
        _placeholder={{ color: "gray.400" }}
        border={"none"}
        position={"relative"}
        left={"30%"}></Input>

      <SimpleGrid padding={16} column={4} spacing={7} minChildWidth={56}>
        {matchedRecipes.map((item) => (
          <Card
            bg='white'
            key={item.recipe.label}
            onClick={() => clickFn(item.recipe.label)}>
            <CardHeader padding={0}>
              <Image
                height={40}
                width={"full"}
                src={item.recipe.image}
                borderTopLeftRadius='md'
                borderTopRightRadius='md'
              />
            </CardHeader>

            <CardBody
              textAlign={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexWrap={"wrap"}
              paddingBottom={10}>
              <Text width={"100%"}>
                {item.recipe.mealType.join("/").toUpperCase()}
              </Text>
              <Heading fontSize={"medium"}>{item.recipe.label}</Heading>

              <HStack
                spacing={2}
                margin={0.5}
                width={"100%"}
                justifyContent={"center"}>
                {item.recipe.healthLabels.includes("Vegan") && (
                  <Box
                    fontWeight={"semibold"}
                    fontSize={"small"}
                    bg='purple.100'>
                    VEGAN
                  </Box>
                )}
                {item.recipe.healthLabels.includes("Vegetarian") && (
                  <Box
                    fontWeight={"semibold"}
                    fontSize={"small"}
                    bg='purple.100'>
                    VEGETARIAN
                  </Box>
                )}
              </HStack>

              <HStack
                width={"100%"}
                justifyContent={"center"}
                spacing={2}
                margin={0.5}>
                {item.recipe.dietLabels.map((dietLabel) => (
                  <Box
                    key={dietLabel}
                    fontWeight={"semibold"}
                    fontSize={"small"}
                    bg='green.100'>
                    {dietLabel.toUpperCase()}
                  </Box>
                ))}
              </HStack>

              <HStack width={"100%"} justifyContent={"center"} spacing={2}>
                <p>Dish:</p>
                {item.recipe.dishType.map((dishType) => (
                  <Box key={dishType} bg='white' fontWeight={"semibold"}>
                    {dishType}
                  </Box>
                ))}
              </HStack>

              {item.recipe.cautions.length > 0 && (
                <Box marginBottom='0' width={"100%"} justifyContent={"center"}>
                  Cautions:
                </Box>
              )}

              <HStack justifyContent={"center"} spacing={2}>
                {item.recipe.cautions.map((caution) => (
                  <Box
                    key={caution}
                    bg='red.100'
                    fontWeight={"semibold"}
                    fontSize={"small"}>
                    {caution.toUpperCase()}
                  </Box>
                ))}
              </HStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
